import productData from "../data/product_intro.json";
import Lottie from "lottie-react";
import workflowAnimation from "../../public/assets/workflow.json";
import financialReportsAnimation from "../../public/assets/Financial Reports.json";
import aiAutoAnimation from "../../public/assets/ai-auto (1).json";

export default function Product() {
  return (
    <div id="product" className="flex flex-col min-h-screen max-w-5xl px-2 sm:px-0 mx-auto pt-24 pb-12">
      <h1 className="text-xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
        Everything work needs, in one place !
      </h1>
      <h2 className="text-lg text-gray-600 max-w-2xl mb-12">
        A single place to organize tasks, automate workflows, collaborate
        seamlessly, and deliver results on time, with fewer errors and less
        rework
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
        <div className="bg-white rounded-xl p-4 col-span-2">
          <div className="space-y-4">
            <div className="pb-4">
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                {productData[0].title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {productData[0].description}
              </p>
            </div>
            <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-lg p-6 max-h-56 overflow-hidden shadow-inner">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-sm">Task Dashboard</h4>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Design System Update</p>
                        <p className="text-xs text-slate-500">UI/UX Team</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completed</span>
                      <span className="text-xs text-slate-400">2d ago</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded border-2 border-slate-300"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">API Integration</p>
                        <p className="text-xs text-slate-500">Backend Team</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">In Progress</span>
                      <span className="text-xs text-slate-400">1d ago</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded border-2 border-slate-300"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">User Testing Phase</p>
                        <p className="text-xs text-slate-500">QA Team</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Planning</span>
                      <span className="text-xs text-slate-400">3d ago</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded border-2 border-slate-300"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">Performance Optimization</p>
                        <p className="text-xs text-slate-500">DevOps Team</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">High Priority</span>
                      <span className="text-xs text-slate-400">5d ago</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 px-4 py-2 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>4 active tasks</span>
                    <span>75% completion rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="space-y-4">
            <div className="h-64 bg-white rounded-lg flex items-center justify-center">
              <Lottie
                animationData={workflowAnimation}
                className="w-full h-full " 
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="pt-4">
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                {productData[1].title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {productData[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="bg-white rounded-xl p-4">
          <div className="space-y-4">
            <div className="h-48 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <Lottie
                animationData={aiAutoAnimation}
                className="w-96 h-96 "
                loop={true}
                autoplay={true}
              />
            </div>
            <div className="pt-4">
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                {productData[2].title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {productData[2].description}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-xl p-4">
          <div className="space-y-4">
            <div className="pb-4">
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                {productData[3].title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {productData[3].description}
              </p>
            </div>
            <div className="h-48 bg-white rounded-lg flex items-center justify-center ">
              <Lottie
                animationData={financialReportsAnimation}
                className="md:w-96 md:h-80"
                loop={true}
                autoplay={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
