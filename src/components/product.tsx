export default function Product() {
  return (
    <div className="flex flex-col min-h-screen max-w-5xl  px-2 sm:px-0 mx-auto pt-24 pb-12">
      <h1 className="text-xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
        Everything work needs, in one place !
      </h1>
      <h2 className="text-lg text-gray-600 max-w-2xl mb-12">
        A single place to organize tasks, automate workflows, collaborate
        seamlessly, and deliver results on time, with fewer errors and less
        rework
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-xl border col-span-2 border-gray-200 p-4">
          <div className="space-y-4">
            <div className="pt-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Push to deploy
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                gravida justo et nulla efficitur, maximus egestas sem
                pellentesque.
              </p>
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
              Deploys content
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl  p-4">
          <div className="space-y-4">
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
              Integrations icons
            </div>
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Connect your favorite tools
              </h3>
              <p className="text-sm text-gray-600">
                Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
                massa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl  p-4">
          <div className="space-y-4">
            <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
              Security image
            </div>
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Advanced access control
              </h3>
              <p className="text-sm text-gray-600">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-xl  p-4">
          <div className="space-y-4">
            <div className="pt-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Lightning-fast builds
              </h3>
              <p className="text-sm text-gray-600">
                Sed congue eros non finibus molestie. Vestibulum euismod augue
                vel commodo vulputate. Maecenas at augue sed elit dictum
                vulputate.
              </p>
            </div>
            <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
              Performance metrics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
