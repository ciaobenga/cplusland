"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Minimize2 } from "lucide-react"

// Create a loading placeholder component
const PDFLoadingPlaceholder = () => (
  <div className="flex justify-center items-center h-[500px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

// Define the props interface outside the dynamic import
interface PDFViewerProps {
  pdfPath: string
}

// Create the actual component that will be dynamically imported
const PDFViewer = ({ pdfPath }: PDFViewerProps) => {
  // We need to dynamically import react-pdf components to avoid SSR issues
  const [PDFLibrary, setPDFLibrary] = useState<{
    Document: any
    Page: any
  } | null>(null)

  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Detect if the screen width is mobile and adjust scale
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScale(0.5)  // Set scale to 50% for mobile screens
      } else {
        setScale(1)  // Default scale for larger screens
      }
    }

    // Call once to set initial scale on load
    handleResize()

    // Attach resize event listener
    window.addEventListener("resize", handleResize)

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Load the PDF library on the client side
  useEffect(() => {
    async function loadPDFLibrary() {
      try {
        const { Document, Page, pdfjs } = await import("react-pdf")
        // Set up the worker for PDF.js
        pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`
        setPDFLibrary({ Document, Page })
      } catch (err) {
        console.error("Failed to load PDF library:", err)
        setError(err instanceof Error ? err : new Error("Failed to load PDF library"))
        setLoading(false)
      }
    }

    loadPDFLibrary()
  }, [])

  // Reset page number when PDF changes
  useEffect(() => {
    console.log("Loading PDF:", pdfPath)
    setPageNumber(1)
    setLoading(true)
    setError(null)
  }, [pdfPath])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setLoading(false)
  }

  function onDocumentLoadError(error: Error) {
    setError(error)
    setLoading(false)
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1) ? newPageNumber : prevPageNumber
    })
  }

  function changeScale(delta: number) {
    setScale((prevScale) => {
      const newScale = prevScale + delta
      return newScale >= 0.5 && newScale <= 2.5 ? newScale : prevScale
    })
  }

  function toggleFullscreen() {
    const viewerElement = document.getElementById("pdf-viewer-container")

    if (!document.fullscreenElement) {
      if (viewerElement?.requestFullscreen) {
        viewerElement
          .requestFullscreen()
          .then(() => setIsFullscreen(true))
          .catch((err) => console.error(`Error attempting to enable fullscreen: ${err.message}`))
      }
    } else {
      if (document.exitFullscreen) {
        document
          .exitFullscreen()
          .then(() => setIsFullscreen(false))
          .catch((err) => console.error(`Error attempting to exit fullscreen: ${err.message}`))
      }
    }
  }

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // If the PDF library hasn't loaded yet, show a loading indicator
  if (!PDFLibrary) {
    return <PDFLoadingPlaceholder />
  }

  const { Document, Page } = PDFLibrary

  return (
    <div
      id="pdf-viewer-container"
      className={`flex flex-col items-center ${isFullscreen ? "bg-transparent p-4 h-screen" : ""}`}
    >
      {/* PDF Controls */}
      <div className="flex flex-wrap gap-2 justify-center mb-4 w-full max-w-4xl">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            <Input
              type="number"
              min={1}
              max={numPages || 1}
              value={pageNumber}
              onChange={(e) => {
                const value = Number.parseInt(e.target.value)
                if (value >= 1 && value <= (numPages || 1)) {
                  setPageNumber(value)
                }
              }}
              className="w-16 text-center"
            />
            <span className="text-sm text-muted-foreground whitespace-nowrap">/ {numPages || 1}</span>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => changePage(1)}
            disabled={numPages === null || pageNumber >= numPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => changeScale(-0.1)} disabled={scale <= 0.5}>
            <ZoomOut className="h-4 w-4" />
          </Button>

          <span className="text-sm whitespace-nowrap">{Math.round(scale * 100)}%</span>

          <Button variant="outline" size="icon" onClick={() => changeScale(0.1)} disabled={scale >= 2.5}>
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="outline" size="icon" onClick={toggleFullscreen} className="ml-2">
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* PDF Document */}
      <div className="overflow-auto border rounded-md w-full max-w-4xl">
        {loading && <PDFLoadingPlaceholder />}

        {error && (
          <div className="flex justify-center items-center h-[500px] text-center p-4">
            <div>
              <p className="text-red-500 font-medium mb-2">Failed to load PDF</p>
              <p className="text-sm text-muted-foreground">
                Make sure the file exists in the public folder and the path is correct.
              </p>
            </div>
          </div>
        )}

        {PDFLibrary && (
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={null}
            className="flex justify-center"
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="h-auto shadow-md"
            />
          </Document>
        )}
      </div>
    </div>
  )
}

// Export a dynamically loaded version of the component with SSR disabled
export default dynamic(() => Promise.resolve(PDFViewer), {
  ssr: false,
  loading: PDFLoadingPlaceholder,
})
