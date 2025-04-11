import React from 'react'

const Footer = () => {
  return (
    <div className="text-black py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold" style={{ fontFamily: 'Montserrat' }}>
            Location
          </h3>
          <p className="mt-2 text-sm" style={{ fontFamily: 'Lora' }}>
            123 Food Street,<br />
            Gourmet Town, Karachi, Pakistan
          </p>
        </div>

        <div style={{whiteSpace:'nowrap'}} className='md:text-center'>
          <h3 className="text-xl font-semibold" style={{ fontFamily: 'Montserrat' }}>
            Opening Hours
          </h3>
          <p className="mt-2 text-sm" style={{ fontFamily: 'Lora' }}>
            Monday - Friday: 12:00 PM - 11:00 PM<br />
            Saturday - Sunday: 1:00 PM - 12:00 AM
          </p>
        </div>

        <div className='md:text-end'>
          <h3 className="text-xl font-semibold" style={{ fontFamily: 'Montserrat' }}>
            Availability
          </h3>
          <p className="mt-2 text-sm" style={{ fontFamily: 'Lora' }}>
            Open All Days<br />
            Closed on Public Holidays
          </p>
        </div>
      </div>

      <div className="mt-10 border-t pt-4 text-center text-sm" style={{ fontFamily: 'Lora' }}>
        <p>&copy; {new Date().getFullYear()} Bite Bliss. All rights reserved.</p>
        <p className="mt-1">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer
