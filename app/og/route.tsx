import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let title = 'Bola Ahmed Buari Portfolio'
  // Fix for github pages deployment to allow static only pages.
  try {
    let url = new URL(request.url)
    title = url.searchParams.get('title') || title
  } catch (error) {
    console.error(error)
  }

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
