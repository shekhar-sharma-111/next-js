import React from 'react'

function layout({children,}:{children:React.ReactNode}) {
  return (
    <html>
        <head>
            <title>route handlers</title>
        </head>
        <body>   
    <div>
        <h1>welcome to next router handlers</h1>
        <div>{children}</div>
    </div>
        </body>
    </html>
  )
}

export default layout