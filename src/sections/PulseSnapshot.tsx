"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import PDFViewer from "@/components/pdf-viewer"
import { Download, Printer } from "lucide-react"

export default function PulseSnapshotPage() {
  const pdfPath = "/documents/pulse-snapshot.pdf"

  const handlePrint = () => {
    const printWindow = window.open(pdfPath, "_blank")
    if (printWindow) {
      printWindow.addEventListener("load", () => {
        printWindow.print()
      })
    }
  }

     return (
          <div className="container mx-auto py-8 px-4">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                         <h1 className="text-3xl font-bold">Pulse Snapshot</h1>
                         <p className="text-muted-foreground">Executive summary and performance metrics</p>
                    </div>

                    <div className="flex gap-3">
                         <Button variant="outline" onClick={handlePrint} className="flex gap-2">
                              <Printer className="h-4 w-4" />
                              Print
                         </Button>
                         <Button asChild className="flex gap-2">
                              <a href={pdfPath} download="Pulse-Snapshot.pdf">
                                   <Download className="h-4 w-4" />
                                   Download
                              </a>
                         </Button>
                    </div>
               </div>

               <Card className="p-4 bg-transparent">
                    <PDFViewer pdfPath={pdfPath} />
               </Card>
          </div>
     )
}