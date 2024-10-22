'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function addToNewsletter(prevState: any, formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
    return { success: false, message: 'Email is required' }
  }

  try {
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    })

    return { success: true, message: 'Successfully subscribed to the newsletter!' }
  } catch (error) {
    console.error('Error adding to newsletter:', error)
    return { success: false, message: 'Failed to subscribe. Please try again.' }
  }
}