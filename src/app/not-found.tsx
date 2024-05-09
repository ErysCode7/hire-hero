'use-client'

import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="mt-20">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound
