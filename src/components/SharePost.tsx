const SharedPost = ({ title, slug }: { title: string, slug: string }) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://riverscode.vercel.app/blog/${slug}`);
  };
  return (
    <section className=" bg-gray-800 max-w-screen-md mx-auto sm:pl-5 w-full md:rounded-lg overflow-hidden flex items-center justify-center shadow-xl sm:pt-0 pt-5">
      <div className="flex sm:flex-row flex-col gap-5 w-full items-center justify-between mx-auto max-w-screen-md">
        <div>
          <p className="text-lg font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 inline-block mr-2 text-rose-400/90 flex-shrink-0"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path></svg>
            <span className="leading-tight">Comparte este artículo</span>
          </p>
        </div>
        <div className="pt-0 flex sm:w-auto w-full items-center divide-x divide-gray-900 justify-center border-t md:border-transparent border-gray-900">
          <a href={`https://twitter.com/intent/tweet/?text=${title};url=https://riverscode.vercel.app/blog/${slug}`} className="w-full flex items-center justify-center h-full px-4 py-4 hover:bg-gray-700/30 transition" target="_blank" rel="noopener noreferrer">
            <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" role="presentation" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"></path></g>
            </svg>
          </a>


          <a href={`https://facebook.com/sharer/sharer.php?u=https://riverscode.vercel.app/blog/${slug}`} className="w-full flex items-center justify-center h-full px-7 py-7 hover:bg-gray-700/30 transition" target="_blank" rel="noopener noreferrer">
            <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" role="presentation" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M16,8.048a8,8,0,1,0-9.25,7.9V10.36H4.719V8.048H6.75V6.285A2.822,2.822,0,0,1,9.771,3.173a12.2,12.2,0,0,1,1.791.156V5.3H10.554a1.155,1.155,0,0,0-1.3,1.25v1.5h2.219l-.355,2.312H9.25v5.591A8,8,0,0,0,16,8.048Z" fill="currentColor"></path></g>
            </svg>
          </a>


          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://riverscode.vercel.app/blog/${slug}`} className=" w-full flex items-center justify-center h-full px-7 py-7 hover:bg-gray-700/30 transition" target="_blank" rel="noopener noreferrer">
            <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" role="presentation"><g fill="currentColor"><path d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7 C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6z M3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4 C4.9,4.3,4.3,5,3.6,5z M13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2 c2.4,0,2.8,1.6,2.8,3.6V13.6z" fill="currentColor"></path></g>
            </svg>
          </a>
          <button onClick={handleCopy} type="button" className="w-full flex items-center justify-center h-full px-7 py-7 hover:bg-gray-700/30 transition">
            <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" role="presentation" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M4.5,16c-1.2,0-2.3-0.5-3.2-1.3c-1.8-1.8-1.8-4.6,0-6.4L2,7.6L3.4,9L2.7,9.7 c-1,1-1,2.6,0,3.6c1,1,2.6,1,3.6,0l3-3c1-1,1-2.6,0-3.6L8.6,6L10,4.6l0.7,0.7c1.8,1.8,1.8,4.6,0,6.4l-3,3C6.9,15.5,5.7,16,4.5,16z"></path><path d="M6,11.4l-0.7-0.7c-1.8-1.8-1.8-4.6,0-6.4l3-3c0.9-0.9,2-1.3,3.2-1.3s2.3,0.5,3.2,1.3c1.8,1.8,1.8,4.6,0,6.4 L14,8.4L12.6,7l0.7-0.7c1-1,1-2.6,0-3.6c-1-1-2.6-1-3.6,0l-3,3c-1,1-1,2.6,0,3.6L7.4,10L6,11.4z" fill="currentColor"></path></g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
export default SharedPost