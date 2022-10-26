
import './App.css';

function App() {
  return (
    <>
     {/* --Global container-- */}
     <div className="flex items-center justify-center bg-slate-700 min-h-screen">
      {/* --card container-- */}
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        {/* --col 1-- */}
        <div className="bg-slate-600 rounded-xl text-white">
          {/* ---upper container-- */}
          <div className="p-8 m-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Basic</div>
            <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 className="mt-2 text-center">$1.99/mo</h3>
            <div className="flex justify-center"><a href="#" className='inline-block px-10 py-3 my-6 text-center border border-blue-600 rounded-lg duration-200 hover:bg-blue-800 hover:border-blue-800'>Purchase</a></div>
            {/* ---Border-- */}
            <div className="border-t border-slate-700"></div>
            {/* --lower container-- */}
            <div className="p-8 mx-3 rounded-b-xl bg-slate-800">
              {/* --list-container-- */}
              <div className="flex flex-col space-y-2">
                {/* --List item 1-- */}
                <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">100 GB of storage</span>
                </div>
                 {/* --List item 2-- */}
                 <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Access to add members</span>
                </div>
                 {/* --List item 3-- */}
                 <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Extra add members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --col-2-- */}

        <div className="bg-blue-600 rounded-xl text-white">
          {/* ---upper container-- */}
          <div className="p-8 m-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Standard</div>
            <h2 className="mt-10 font-serif text-5xl text-center">200GB</h2>
            <h3 className="mt-2 text-center">$3.99/mo</h3>
            <div className="flex justify-center"><a href="#" className='inline-block px-10 py-3 my-6 text-center border border-blue-600 rounded-lg duration-200 hover:bg-blue-800 hover:border-blue-800'>Purchase</a></div>
            {/* ---Border-- */}
            <div className="border-t border-slate-700"></div>
            {/* --lower container-- */}
            <div className="p-8 mx-3 rounded-b-xl bg-slate-800">
              {/* --list-container-- */}
              <div className="flex flex-col space-y-2">
                {/* --List item 1-- */}
                <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">200 GB of storage</span>
                </div>
                 {/* --List item 2-- */}
                 <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Access to add members</span>
                </div>
                 {/* --List item 3-- */}
                 <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Extra add members</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --col-3-- */}

        <div className="bg-slate-600 rounded-xl text-white">
          {/* ---upper container-- */}
          <div className="p-8 m-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Premium</div>
            <h2 className="mt-10 font-serif text-5xl text-center">2 TB</h2>
            <h3 className="mt-2 text-center">$8.99/mo</h3>
            <div className="flex justify-center"><a href="#" className='inline-block px-10 py-3 my-6 text-center border border-blue-600 rounded-lg duration-200 hover:bg-blue-800 hover:border-blue-800'>Purchase</a></div>
            {/* ---Border-- */}
            <div className="border-t border-slate-700"></div>
            {/* --lower container-- */}
            <div className="p-8 mx-3 rounded-b-xl bg-slate-800">
              {/* --list-container-- */}
              <div className="flex flex-col space-y-2">
                {/* --List item 1-- */}
                <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">2 TB of storage</span>
                </div>
                 {/* --List item 2-- */}
                 <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Access to add members</span>
                </div>
                 {/* --List item 3-- */}
                 <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1">Extra add members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>

     </div>
    </>
  );
}

export default App;
