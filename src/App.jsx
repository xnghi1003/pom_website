import React, { useState } from 'react';
import Card from "./components/Card";
import { 
  Home, 
  CalendarClock, 
  Users, 
  Target, 
  Briefcase, 
  PieChart, 
  BookOpen, 
  ClipboardCheck, 
  LayoutList,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  BookMarked
} from 'lucide-react';

// --- DATA & CONTENT ---

const navigation = [
  { id: 'home', title: 'Home', icon: Home },
  { id: 'process', title: '1. Planning Process', icon: CalendarClock },
  { id: 'sop', title: '2. S&OP', icon: Users },
  { id: 'nature', title: '3. Nature of Planning', icon: Target },
  { id: 'strategies', title: '4. Strategies', icon: Briefcase },
  { id: 'methods', title: '5. Methods', icon: PieChart },
  { id: 'cases', title: '6. Case Studies', icon: BookOpen },
  { id: 'summary', title: '7. Summary', icon: LayoutList },
  { id: 'practice', title: '8. Practice & Review', icon: ClipboardCheck },
];

// --- COMPONENTS ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 border-b pb-4">
    <h1 className="text-3xl font-bold text-slate-800 mb-2">{title}</h1>
    {subtitle && <p className="text-slate-500 text-lg">{subtitle}</p>}
  </div>
);

// --- SECTIONS ---

const HomeSection = () => (
  <div className="space-y-6">
    <SectionHeader 
      title="Chapter 6: Aggregate Planning" 
      subtitle="Welcome to Group 3's Study Guide for Production & Operations Management (Class CC01)" 
    />
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card title="Introduction to Chapter 6">
        <p className="text-slate-700 leading-relaxed">
          In previous chapters, we saw how demand forecasting addresses long, medium, and short-range decisions. 
          This chapter illustrates how managers translate these forecasts into actionable <strong>intermediate-range plans</strong> (3 to 18 months). 
          We will explore how to balance capacity and demand to minimize costs while meeting customer needs.
        </p>
      </Card>

      <Card title="Learning Objectives">
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Understand the role of Sales and Operations Planning (S&OP).</li>
          <li>Identify the capacity and demand options available to operations managers.</li>
          <li>Differentiate between chase, level, and mixed scheduling strategies.</li>
          <li>Apply graphical methods to evaluate aggregate planning options.</li>
          <li>Understand the application of the transportation method of linear programming.</li>
        </ul>
      </Card>
    </div>

    <Card title="About Group 3" className="bg-blue-50 border-blue-100">
      <p className="text-blue-900 mb-4">
        We are students studying Production & Operations Management. This interactive guide was designed to help our peers 
        grasp the core concepts of Aggregate Planning step-by-step. Use the navigation menu to proceed through the chapter.
      </p>
      <div className="bg-white p-4 rounded-lg border border-blue-200">
        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2"><Users className="w-5 h-5"/> Group Members:</h4>
        <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-700">
          <li>Ngô Trần Xuân Nghi - 2452817</li>
          <li>Nguyễn Châu Tuyết Anh - 2452055</li>
          <li>Ngô Hồng Khánh - 2452498</li>
          <li>Vũ Kim Long - 2411947</li>
          <li>Lê Hoàng Phương Nghi - 2452815</li>
          <li>Nguyễn Thành Nam - 2452796</li>
          <li>Đặng Thy Phương - 2453021</li>
          <li>Nguyễn Chí Tài - 2453134</li>
        </ul>
      </div>
    </Card>
  </div>
);

const PlanningProcess = () => (
  <div className="space-y-6">
    <SectionHeader title="1. The Planning Process" subtitle="Connecting strategic goals with day-to-day operations" />
    
    <div className="space-y-4">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h4 className="font-bold text-lg">Long-range plans (over 1 year)</h4>
        <p className="text-blue-100 text-sm">Responsibility: Top Executives</p>
        <p className="mt-2 text-sm">Issues: Research and Development, New product plans, Capital investments, Facility location/capacity.</p>
      </div>
      
      <div className="bg-orange-400 text-white p-4 mx-4 shadow-md z-10 relative">
        <h4 className="font-bold text-lg">Intermediate-range plans (3 to 18 months)</h4>
        <p className="text-orange-100 text-sm">Responsibility: Operations managers with S&OP team</p>
        <p className="mt-2 text-sm">Issues: Sales and Operations Planning, Production planning, Budgeting, Setting employment/inventory/subcontracting levels. <strong>(Focus of this chapter)</strong></p>
      </div>
      
      <div className="bg-yellow-400 text-slate-800 p-4 mx-8 rounded-b-lg shadow-sm">
        <h4 className="font-bold text-lg">Short-range plans (up to 3 months)</h4>
        <p className="text-yellow-800 text-sm">Responsibility: Operations managers, supervisors, foremen</p>
        <p className="mt-2 text-sm">Issues: Job assignments, Ordering, Job scheduling, Dispatching, Overtime, Part-time help.</p>
      </div>
    </div>
  </div>
);

const SOP = () => (
  <div className="space-y-6">
    <SectionHeader title="2. Sales & Operations Planning (S&OP)" subtitle="Balancing resources and forecasted demand" />
    
    <Card>
      <h3 className="text-xl font-bold text-slate-800 mb-2">Definition</h3>
      <p className="text-slate-700 mb-4">
        <strong>Sales and operations planning (S&OP)</strong> is the process of balancing resources and forecasted demand, aligning an organization's competing demands from supply chain to final customer, while linking strategic planning with operations over all planning horizons.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <h4 className="font-semibold text-blue-700 flex items-center gap-2"><Users className="w-5 h-5"/> Cross-functional Coordination</h4>
          <p className="text-slate-600 mt-2 text-sm">
            S&OP receives inputs from marketing, research, supply chain, workforce, and inventory. Because of diverse inputs, S&OP is typically done by cross-functional teams.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-700 flex items-center gap-2"><Target className="w-5 h-5"/> The Output: Aggregate Plan</h4>
          <p className="text-slate-600 mt-2 text-sm">
            The output of S&OP is the <strong>Aggregate Plan</strong>, concerned with determining the quantity and timing of production for the intermediate future (3-18 months).
          </p>
        </div>
      </div>
    </Card>

    <Card title="Features of Effective S&OP" className="bg-slate-50">
      <ul className="grid md:grid-cols-2 gap-4">
        <li className="flex gap-3"><div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"/> <span className="text-slate-700">A logical unit for measuring sales and output.</span></li>
        <li className="flex gap-3"><div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"/> <span className="text-slate-700">A forecast of demand for a reasonable intermediate planning period.</span></li>
        <li className="flex gap-3"><div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"/> <span className="text-slate-700">A method to determine the relevant costs.</span></li>
        <li className="flex gap-3"><div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"/> <span className="text-slate-700">A model that combines forecasts and costs so scheduling decisions can be made.</span></li>
      </ul>
    </Card>
  </div>
);

const Nature = () => (
  <div className="space-y-6">
    <SectionHeader title="3. The Nature of Aggregate Planning" subtitle="Looking at the big picture" />
    
    <Card>
      <p className="text-slate-700 mb-6">
        Aggregate plans use information regarding <strong>product families or product lines</strong> rather than individual products. The objective is usually to meet forecast demand while <strong>minimizing cost</strong> over the planning period (though other strategies like smoothing employment may take priority).
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
        <h4 className="text-lg font-bold text-blue-900 mb-3">The Disaggregation Process</h4>
        <p className="text-slate-700 mb-4">
          In a manufacturing environment, the process of breaking the aggregate plan down into greater detail is called <strong>disaggregation</strong>.
        </p>
        <div className="flex flex-col items-center gap-2 font-medium text-slate-800">
          <div className="bg-white px-6 py-3 rounded border w-64 text-center shadow-sm">Aggregate Plan</div>
          <div className="h-6 w-0.5 bg-slate-300"></div>
          <div className="bg-white px-6 py-3 rounded border w-64 text-center shadow-sm">Disaggregation</div>
          <div className="h-6 w-0.5 bg-slate-300"></div>
          <div className="bg-blue-600 text-white px-6 py-3 rounded border w-64 text-center shadow-sm">Master Production Schedule (MPS)</div>
        </div>
        <p className="text-sm text-slate-500 mt-4 text-center">
          *The MPS provides input to material requirements planning (MRP) systems, specifying <em>what</em> is to be made and <em>when</em>.
        </p>
      </div>
    </Card>
  </div>
);

const Strategies = () => (
  <div className="space-y-6">
    <SectionHeader title="4. Aggregate Planning Strategies" subtitle="Manipulating capacity and demand options" />
    
    <div className="grid lg:grid-cols-2 gap-6">
      <Card title="4.1 Capacity Options (Absorb Fluctuations)">
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-slate-800">1. Changing inventory levels</h5>
            <p className="text-sm text-slate-600">Increase inventory in low periods. <em>Disadv:</em> Holding costs, potential shortages.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-slate-800">2. Varying workforce size</h5>
            <p className="text-sm text-slate-600">Hire or lay off workers. <em>Disadv:</em> Training costs, lowered morale, productivity drops.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-slate-800">3. Varying production rates</h5>
            <p className="text-sm text-slate-600">Use overtime or idle time. <em>Disadv:</em> Overtime premiums, worker fatigue.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-slate-800">4. Subcontracting</h5>
            <p className="text-sm text-slate-600">Acquire temporary capacity. <em>Disadv:</em> Costly, risks competitor entry, loss of quality control.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="font-bold text-slate-800">5. Using part-time workers</h5>
            <p className="text-sm text-slate-600">Good for service sector. <em>Disadv:</em> High turnover, scheduling difficulties.</p>
          </div>
        </div>
      </Card>

      <Card title="4.2 Demand Options (Smooth Fluctuations)">
        <div className="space-y-4">
          <div className="border-l-4 border-orange-500 pl-4">
            <h5 className="font-bold text-slate-800">1. Influencing demand</h5>
            <p className="text-sm text-slate-600">Advertising, promotions, price cuts during low demand. <em>Disadv:</em> Hard to match exact capacity.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h5 className="font-bold text-slate-800">2. Back ordering</h5>
            <p className="text-sm text-slate-600">Accept orders but fill them later. <em>Disadv:</em> Customer must be willing to wait; goodwill may be lost.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h5 className="font-bold text-slate-800">3. Counterseasonal mixing</h5>
            <p className="text-sm text-slate-600">Produce items with opposite demand patterns (e.g., mowers & snowblowers). <em>Disadv:</em> May require new expertise.</p>
          </div>
        </div>
      </Card>
    </div>

    <Card title="4.3 Mixing Options To Develop A Plan">
      <p className="text-slate-700 mb-10 text-lg">
        The Chase Strategy and the Level Strategy are two extremes of how firms respond using capacity and demand options. Most firms use a <strong>Mixed Strategy</strong> combining multiple options to achieve minimum cost.
      </p>

      {/* STRATEGY SPECTRUM DIAGRAM */}
      <div className="relative mb-12 max-w-3xl mx-auto px-4 mt-8">
        {/* Large Background Arrow */}
        <svg 
          className="absolute inset-0 w-full h-[150%] -top-[25%] z-0 text-blue-100 opacity-80" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
        >
          <polygon points="2,30 75,30 75,10 98,50 75,90 75,70 2,70" fill="currentColor" />
        </svg>

        {/* 3 Strategy Cards */}
        <div className="relative z-10 flex justify-between gap-3 md:gap-6 py-4">
          <div className="flex-1 bg-white border-2 border-blue-700 rounded-3xl flex items-center justify-center py-8 md:py-10 shadow-md transition-shadow hover:shadow-lg">
            <span className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-wide">Level</span>
          </div>
          <div className="flex-1 bg-white border-2 border-blue-700 rounded-3xl flex items-center justify-center py-8 md:py-10 shadow-md transition-shadow hover:shadow-lg">
            <span className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-wide">Mixed</span>
          </div>
          <div className="flex-1 bg-white border-2 border-blue-700 rounded-3xl flex items-center justify-center py-8 md:py-10 shadow-md transition-shadow hover:shadow-lg">
            <span className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-wide">Chase</span>
          </div>
        </div>

        {/* Bottom Labels */}
        <div className="relative z-10 flex justify-between px-2 md:px-6 mt-4">
          <div className="bg-blue-700 text-white px-6 md:px-8 py-1.5 md:py-2 font-semibold text-base md:text-lg shadow-md rounded">
            Capacity
          </div>
          <div className="bg-blue-700 text-white px-6 md:px-8 py-1.5 md:py-2 font-semibold text-base md:text-lg shadow-md rounded">
            Demand
          </div>
        </div>
      </div>

      {/* Explanations */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
          <h4 className="text-xl font-bold text-blue-800 mb-3">Level Strategy</h4>
          <p className="text-slate-700 text-sm leading-relaxed">
            Production is uniform from period to period. Let finished-goods inventory vary to buffer differences, or find alternative work for employees. Leads to better quality and less turnover (e.g., Toyota). Focuses heavily on managing <strong>Capacity</strong>.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
          <h4 className="text-xl font-bold text-blue-800 mb-3">Chase Strategy</h4>
          <p className="text-slate-700 text-sm leading-relaxed">
            Attempts to achieve output rates for each period that match the demand forecast for that period. Often used in service organizations where inventory cannot be held (education, hospitality). Reacts directly to <strong>Demand</strong>.
          </p>
        </div>
      </div>
    </Card>
  </div>
);

const Methods = () => (
  <div className="space-y-6">
    <SectionHeader title="5. Methods for Aggregate Planning" subtitle="From graphical trial-and-error to mathematical optimization" />
    
    <Card title="5.1 Graphical Methods">
      <p className="text-slate-700 mb-4">
        Popular because they are easy to understand and use. They are trial-and-error approaches that do not guarantee an optimal plan, but require limited computations.
      </p>
      <div className="bg-blue-50 rounded p-4">
        <h4 className="font-bold text-blue-900 mb-2">5 Steps in the Graphical Method:</h4>
        <ol className="list-decimal pl-5 space-y-1 text-slate-800 text-sm">
          <li>Determine the demand in each period.</li>
          <li>Determine capacity for regular time, overtime, and subcontracting each period.</li>
          <li>Find labor costs, hiring and layoff costs, and inventory holding costs.</li>
          <li>Consider company policy that may apply to the workers or to stock levels.</li>
          <li>Develop alternative plans and examine their total costs.</li>
        </ol>
      </div>
    </Card>

    <Card title="5.2 Mathematical Approaches">
      <h4 className="font-bold text-slate-800 mb-2">Transportation Method of Linear Programming</h4>
      <p className="text-slate-700 mb-4">
        Produces an <strong>optimal plan</strong> for minimizing costs when allocating operating capacity to meet forecast demand. It is flexible and can specify regular, overtime, subcontracting, and inventory carryover.
      </p>
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 text-sm text-slate-700">
        <strong>Limitation:</strong> The transportation method works well when costs are linear. It does not work when nonlinear or negative factors (like hiring and layoff costs) are introduced. In those cases, general linear programming or computer simulation is required.
      </div>
    </Card>
  </div>
);

const CaseStudies = () => {
  return (
    <div className="space-y-8">
      <SectionHeader title="6. Case Studies & Examples" subtitle="Detailed step-by-step application of aggregate planning techniques" />
      
      {/* CASE 1: ROOFING SUPPLIER */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 border-b pb-2">Case 1: The Roofing Supplier (Graphical Method)</h2>
        <p className="text-slate-700">
          A Juarez, Mexico, manufacturer of roofing supplies has developed monthly forecasts for a family of products. They need to develop an aggregate plan for the 6-month period from January to June.
        </p>

        {/* DATA TABLES */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card title="Table 1: Monthly Forecasts">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border p-2">Month</th>
                  <th className="border p-2">Expected Demand</th>
                  <th className="border p-2">Production Days</th>
                  <th className="border p-2">Demand Per Day</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-2">Jan</td><td className="border p-2">900</td><td className="border p-2">22</td><td className="border p-2">41</td></tr>
                <tr><td className="border p-2">Feb</td><td className="border p-2">700</td><td className="border p-2">18</td><td className="border p-2">39</td></tr>
                <tr><td className="border p-2">Mar</td><td className="border p-2">800</td><td className="border p-2">21</td><td className="border p-2">38</td></tr>
                <tr><td className="border p-2">Apr</td><td className="border p-2">1,200</td><td className="border p-2">21</td><td className="border p-2">57</td></tr>
                <tr><td className="border p-2">May</td><td className="border p-2">1,500</td><td className="border p-2">22</td><td className="border p-2">68</td></tr>
                <tr><td className="border p-2">June</td><td className="border p-2">1,100</td><td className="border p-2">20</td><td className="border p-2">55</td></tr>
                <tr className="bg-slate-50 font-bold"><td className="border p-2">Total</td><td className="border p-2">6,200</td><td className="border p-2">124</td><td className="border p-2">-</td></tr>
              </tbody>
            </table>
          </Card>

          <Card title="Table 2: Cost Information">
            <table className="w-full text-sm text-left border-collapse">
              <tbody>
                <tr><td className="border p-2 font-medium">Inventory carrying cost</td><td className="border p-2">$5 per unit per month</td></tr>
                <tr><td className="border p-2 font-medium">Subcontracting cost</td><td className="border p-2">$20 per unit</td></tr>
                <tr><td className="border p-2 font-medium">Average pay rate</td><td className="border p-2">$10 per hour ($80 per day)</td></tr>
                <tr><td className="border p-2 font-medium">Overtime pay rate</td><td className="border p-2">$17 per hour (above 8 hours)</td></tr>
                <tr><td className="border p-2 font-medium">Labor-hours to produce</td><td className="border p-2">1.6 hours per unit</td></tr>
                <tr><td className="border p-2 font-medium">Hiring / Training cost</td><td className="border p-2">$300 per unit change</td></tr>
                <tr><td className="border p-2 font-medium">Layoff cost</td><td className="border p-2">$600 per unit change</td></tr>
              </tbody>
            </table>
          </Card>
        </div>

        {/* GRAPH */}
        <Card title="Figure 1: Graph of Forecast vs. Average Demand">
          <p className="text-sm text-slate-600 mb-6">
            <strong>Step 1:</strong> Calculate average requirement: 6,200 units / 124 days = <strong>50 units per day</strong>.
          </p>
          
          <div className="w-full aspect-[2/1] max-h-[400px] mx-auto bg-white mb-4">
            <svg viewBox="0 0 850 450" className="w-full h-full font-sans overflow-visible">
              {/* Y-Axis Label */}
              <text x="-200" y="40" fontSize="16" fill="#334155" fontWeight="bold" textAnchor="middle" transform="rotate(-90)">
                Production rate per working day
              </text>
              
              {/* Y-Axis scale marks and lines */}
              {[
                {val: 70, y: 50},
                {val: 60, y: 112.5},
                {val: 50, y: 175},
                {val: 40, y: 237.5},
                {val: 30, y: 300},
                {val: 0, y: 350}
              ].map(tick => (
                <g key={tick.val}>
                  <line x1="95" y1={tick.y} x2="100" y2={tick.y} stroke="#334155" strokeWidth="1.5" />
                  <text x="85" y={tick.y + 5} fontSize="14" fill="#475569" textAnchor="end">{tick.val}</text>
                </g>
              ))}
              
              {/* Axes */}
              <line x1="100" y1="50" x2="100" y2="350" stroke="#334155" strokeWidth="1.5" />
              <line x1="100" y1="350" x2="780" y2="350" stroke="#334155" strokeWidth="1.5" />
              
              {/* Bars */}
              <g>
                <rect x="100.5" y="231.25" width="108" height="118.25" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
                <text x="154.5" y="248" fontSize="14" fill="#1e40af" fontWeight="bold" textAnchor="middle">Jan (41)</text>
                
                <rect x="208.5" y="243.75" width="108" height="105.75" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
                <text x="262.5" y="260" fontSize="14" fill="#1e40af" fontWeight="bold" textAnchor="middle">Feb (39)</text>

                <rect x="316.5" y="250" width="108" height="99.5" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
                <text x="370.5" y="267" fontSize="14" fill="#1e40af" fontWeight="bold" textAnchor="middle">Mar (38)</text>

                <rect x="424.5" y="131.25" width="108" height="218.25" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
                <text x="478.5" y="148" fontSize="14" fill="#9a3412" fontWeight="bold" textAnchor="middle">Apr (57)</text>

                <rect x="532.5" y="62.5" width="108" height="287" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
                <text x="586.5" y="80" fontSize="14" fill="#9a3412" fontWeight="bold" textAnchor="middle">May (68)</text>

                <rect x="640.5" y="143.75" width="108" height="205.75" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.5" />
                <text x="694.5" y="161" fontSize="14" fill="#9a3412" fontWeight="bold" textAnchor="middle">Jun (55)</text>
              </g>

              {/* Average Line */}
              <line x1="100" y1="175" x2="780" y2="175" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 4" />
              <text x="110" y="165" fontSize="14" fill="#dc2626" fontWeight="bold">Level production, using average monthly forecast demand</text>
              
              {/* Forecast Demand Arrow */}
              <text x="586.5" y="30" fontSize="14" fill="#475569" fontWeight="bold" textAnchor="middle">Forecast demand</text>
              <line x1="586.5" y1="35" x2="586.5" y2="58" stroke="#475569" strokeWidth="1.5" />
              <polygon points="586.5,62 582,54 591,54" fill="#475569" />

              {/* X-axis Labels */}
              {[
                {label: 'Jan.', days: 22, x: 154.5},
                {label: 'Feb.', days: 18, x: 262.5},
                {label: 'Mar.', days: 21, x: 370.5},
                {label: 'Apr.', days: 21, x: 478.5},
                {label: 'May', days: 22, x: 586.5},
                {label: 'June', days: 20, x: 694.5},
              ].map(tick => (
                <g key={tick.label}>
                  <line x1={tick.x} y1="350" x2={tick.x} y2="355" stroke="#334155" strokeWidth="1.5" />
                  <polygon points={`${tick.x},355 ${tick.x-3},360 ${tick.x+3},360`} fill="#334155" />
                  <text x={tick.x} y="375" fontSize="14" fill="#334155" textAnchor="middle">{tick.label}</text>
                  <text x={tick.x} y="405" fontSize="14" fill="#334155" textAnchor="middle">{tick.days}</text>
                  <polygon points={`${tick.x},390 ${tick.x-3},385 ${tick.x+3},385`} fill="#334155" />
                </g>
              ))}
              
              {/* X-axis Legend */}
              <text x="760" y="375" fontSize="14" fill="#334155" textAnchor="start">= Month</text>
              <text x="760" y="405" fontSize="14" fill="#334155" textAnchor="start">= Number of</text>
              <text x="770" y="420" fontSize="14" fill="#334155" textAnchor="start">working days</text>
            </svg>
          </div>
        </Card>

        {/* PLAN 1 */}
        <Card title="Plan 1: Constant Workforce (Level Strategy)">
          <div className="bg-blue-50 p-4 border-l-4 border-blue-600 mb-6 text-sm text-slate-800">
            <strong>How to solve:</strong> Set production exactly at the average demand (50 units/day). 
            Workers needed = 50 units / (8 hours / 1.6 hrs per unit) = <strong>10 workers</strong>.
            Inventory accumulates when demand is below 50 (Jan-Mar) and is depleted when demand is above 50 (Apr-Jun).
          </div>
          
          {/* CUMULATIVE GRAPH */}
          <div className="mb-8 bg-white pt-4">
            <div className="relative w-full aspect-[4/3] max-h-[500px] mx-auto">
              <svg viewBox="0 0 800 650" className="w-full h-full overflow-visible font-sans">
                {/* Shading Polygons */}
                <polygon
                  points="120,550 170,523 220,493 270,458 320,420 370,385 420,345 470,305 520,260 550,232.6 120,550"
                  fill="#f4bfa5"
                />
                <polygon
                  points="550,232.6 585,185 620,150 670,122 720,107.1 550,232.6"
                  fill="#a5c3e0"
                />

                {/* Axes */}
                <line x1="120" y1="50" x2="120" y2="550" stroke="#333" strokeWidth="1.5" />
                <line x1="120" y1="550" x2="750" y2="550" stroke="#333" strokeWidth="1.5" />

                {/* Y-axis ticks and labels */}
                {[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000].map((val, i) => {
                  const y = 550 - i * 71.428;
                  return (
                    <g key={val}>
                      <line x1="110" y1={y} x2="120" y2={y} stroke="#333" strokeWidth="1" />
                      <text x="100" y={y + 5} fontSize="16" fill="#333" textAnchor="end">
                        {val === 0 ? "0" : `${val.toString().slice(0, 1)},000`}
                      </text>
                    </g>
                  );
                })}

                {/* X-axis ticks and labels */}
                {["Jan.", "Feb.", "Mar.", "Apr.", "May", "June"].map((month, i) => {
                  const x = 220 + i * 100;
                  return (
                    <g key={month}>
                      <line x1={x} y1="550" x2={x} y2="560" stroke="#333" strokeWidth="1" />
                      <text x={x} y="585" fontSize="16" fill="#333" textAnchor="middle">
                        {month}
                      </text>
                    </g>
                  );
                })}
                {/* "Month" label */}
                <text x="470" y="620" fontSize="16" fill="#333" textAnchor="middle">
                  Month
                </text>

                {/* Lines */}
                <line x1="120" y1="550" x2="720" y2="107.1" stroke="#b91c1c" strokeWidth="3" />
                <polyline
                  points="120,550 170,523 220,493 270,458 320,420 370,385 420,345 470,305 520,260 550,232.6 585,185 620,150 670,122 720,107.1"
                  fill="none"
                  stroke="#1e3a8a"
                  strokeWidth="3"
                />

                {/* Labels and Pointers */}
                <text x="-300" y="40" fontSize="18" fill="#333" textAnchor="middle" transform="rotate(-90)">
                  Cumulative demand units
                </text>

                <text x="590" y="70" fontSize="16" fill="#333">6,200 units</text>
                <line x1="680" y1="65" x2="715" y2="100" stroke="#333" strokeWidth="1" />

                <text x="450" y="115" fontSize="16" fill="#333" textAnchor="middle">Reduction</text>
                <text x="450" y="135" fontSize="16" fill="#333" textAnchor="middle">of inventory</text>
                <line x1="510" y1="135" x2="580" y2="200" stroke="#333" strokeWidth="1" />

                <text x="280" y="240" fontSize="16" fill="#333" textAnchor="middle">Cumulative level of production,</text>
                <text x="280" y="260" fontSize="16" fill="#333" textAnchor="middle">using average monthly</text>
                <text x="280" y="280" fontSize="16" fill="#333" textAnchor="middle">forecast requirements</text>
                <line x1="310" y1="285" x2="350" y2="380" stroke="#333" strokeWidth="1" />

                <text x="580" y="380" fontSize="16" fill="#333" textAnchor="middle">Cumulative forecast</text>
                <text x="580" y="400" fontSize="16" fill="#333" textAnchor="middle">requirements</text>
                <line x1="530" y1="375" x2="450" y2="335" stroke="#333" strokeWidth="1" />

                <text x="400" y="480" fontSize="16" fill="#333" textAnchor="middle">Excess inventory</text>
                <line x1="340" y1="475" x2="270" y2="450" stroke="#333" strokeWidth="1" />
              </svg>
            </div>
            <p className="text-slate-500 text-lg font-medium mt-10 text-center">Figure 2: Cumulative Graph for Plan 1</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border p-2">Month</th>
                  <th className="border p-2">Production Days</th>
                  <th className="border p-2">Production @ 50/day</th>
                  <th className="border p-2">Demand Forecast</th>
                  <th className="border p-2">Monthly Inv Change</th>
                  <th className="border p-2">Ending Inventory</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-2">Jan</td><td className="border p-2">22</td><td className="border p-2">1,100</td><td className="border p-2">900</td><td className="border p-2 text-green-600">+200</td><td className="border p-2">200</td></tr>
                <tr><td className="border p-2">Feb</td><td className="border p-2">18</td><td className="border p-2">900</td><td className="border p-2">700</td><td className="border p-2 text-green-600">+200</td><td className="border p-2">400</td></tr>
                <tr><td className="border p-2">Mar</td><td className="border p-2">21</td><td className="border p-2">1,050</td><td className="border p-2">800</td><td className="border p-2 text-green-600">+250</td><td className="border p-2">650</td></tr>
                <tr><td className="border p-2">Apr</td><td className="border p-2">21</td><td className="border p-2">1,050</td><td className="border p-2">1,200</td><td className="border p-2 text-red-600">-150</td><td className="border p-2">500</td></tr>
                <tr><td className="border p-2">May</td><td className="border p-2">22</td><td className="border p-2">1,100</td><td className="border p-2">1,500</td><td className="border p-2 text-red-600">-400</td><td className="border p-2">100</td></tr>
                <tr><td className="border p-2">June</td><td className="border p-2">20</td><td className="border p-2">1,000</td><td className="border p-2">1,100</td><td className="border p-2 text-red-600">-100</td><td className="border p-2">0</td></tr>
                <tr className="bg-slate-50 font-bold"><td colSpan="5" className="border p-2 text-right">Total Inventory Carried:</td><td className="border p-2">1,850 units</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm bg-slate-100 p-4 rounded">
            <strong>Costs:</strong><br/>
            - Inventory: 1,850 units × $5 = $9,250<br/>
            - Regular Labor: 10 workers × $80/day × 124 days = $99,200<br/>
            <strong>Total Cost = $108,450</strong>
          </div>
        </Card>

        {/* PLAN 2 */}
        <Card title="Plan 2: Subcontracting with Constant Workforce (Mixed Strategy)">
          <div className="bg-orange-50 p-4 border-l-4 border-orange-500 mb-4 text-sm text-slate-800">
            <strong>How to solve:</strong> Set the workforce level to meet the <em>lowest</em> demand month exactly (March = 38 units/day).
            Workers needed = 38 / 5 = <strong>7.6 workers</strong>. Produce a constant 38 units/day. Subcontract all excess demand. No inventory is held.
          </div>
          <div className="mt-4 text-sm bg-slate-100 p-4 rounded space-y-2">
            <p>- In-house production: 38 units/day × 124 days = <strong>4,712 units</strong>.</p>
            <p>- Subcontracted units: 6,200 (Total Demand) - 4,712 = <strong>1,488 units</strong>.</p>
            <div className="border-t pt-2 mt-2">
              <strong>Costs:</strong><br/>
              - Regular Labor: 7.6 workers × $80/day × 124 days = $75,392<br/>
              - Subcontracting: 1,488 units × $20/unit = $29,760<br/>
              <strong>Total Cost = <span className="text-blue-700 font-bold">$105,152</span> (Lowest Cost Plan)</strong>
            </div>
          </div>
        </Card>

        {/* PLAN 3 */}
        <Card title="Plan 3: Hiring and Layoffs (Chase Strategy)">
          <div className="bg-green-50 p-4 border-l-4 border-green-500 mb-4 text-sm text-slate-800">
            <strong>How to solve:</strong> Vary the workforce exactly to match the daily production rate needed for that month's demand. 
            If the rate increases from the previous month, multiply the difference by the hiring cost ($300). If it decreases, multiply by the layoff cost ($600).
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border-collapse">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border p-2">Month</th>
                  <th className="border p-2">Daily Prod. Rate</th>
                  <th className="border p-2">Basic Prod. Cost<br/><span className="font-normal text-xs">(Demand × 1.6hr × $10)</span></th>
                  <th className="border p-2">Hiring Cost<br/><span className="font-normal text-xs">(Rate Increase × $300)</span></th>
                  <th className="border p-2">Layoff Cost<br/><span className="font-normal text-xs">(Rate Decrease × $600)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-2">Jan</td><td className="border p-2">41</td><td className="border p-2">$14,400</td><td className="border p-2">-</td><td className="border p-2">-</td></tr>
                <tr><td className="border p-2">Feb</td><td className="border p-2">39</td><td className="border p-2">$11,200</td><td className="border p-2">-</td><td className="border p-2">$1,200 <span className="text-xs text-slate-500">(2×$600)</span></td></tr>
                <tr><td className="border p-2">Mar</td><td className="border p-2">38</td><td className="border p-2">$12,800</td><td className="border p-2">-</td><td className="border p-2">$600 <span className="text-xs text-slate-500">(1×$600)</span></td></tr>
                <tr><td className="border p-2">Apr</td><td className="border p-2">57</td><td className="border p-2">$19,200</td><td className="border p-2">$5,700 <span className="text-xs text-slate-500">(19×$300)</span></td><td className="border p-2">-</td></tr>
                <tr><td className="border p-2">May</td><td className="border p-2">68</td><td className="border p-2">$24,000</td><td className="border p-2">$3,300 <span className="text-xs text-slate-500">(11×$300)</span></td><td className="border p-2">-</td></tr>
                <tr><td className="border p-2">June</td><td className="border p-2">55</td><td className="border p-2">$17,600</td><td className="border p-2">-</td><td className="border p-2">$7,800 <span className="text-xs text-slate-500">(13×$600)</span></td></tr>
                <tr className="bg-slate-50 font-bold">
                  <td colSpan="2" className="border p-2 text-right">Totals:</td>
                  <td className="border p-2">$99,200</td><td className="border p-2">$9,000</td><td className="border p-2">$9,600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm bg-slate-100 p-4 rounded text-right">
            <strong>Total Cost = $117,800</strong>
          </div>
        </Card>
      </div>

      {/* CASE 2: FARNSWORTH TIRE */}
      <div className="space-y-6 mt-12 pt-8 border-t border-slate-300">
        <h2 className="text-2xl font-bold text-slate-800 border-b pb-2">Case 2: Farnsworth Tire (Transportation Method)</h2>
        <p className="text-slate-700">
          When an aggregate planning problem is viewed as allocating operating capacity to meet forecast demand, we can use the linear programming transportation method to find the <strong>optimal, minimum-cost plan</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Table 3: Capacity & Demand">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-slate-100">
                <tr><th className="border p-2">Item</th><th className="border p-2">Mar</th><th className="border p-2">Apr</th><th className="border p-2">May</th></tr>
              </thead>
              <tbody>
                <tr className="font-bold bg-blue-50"><td className="border p-2">Demand</td><td className="border p-2">800</td><td className="border p-2">1,000</td><td className="border p-2">750</td></tr>
                <tr><td className="border p-2">Regular Capacity</td><td className="border p-2">700</td><td className="border p-2">700</td><td className="border p-2">700</td></tr>
                <tr><td className="border p-2">Overtime Capacity</td><td className="border p-2">50</td><td className="border p-2">50</td><td className="border p-2">50</td></tr>
                <tr><td className="border p-2">Subcontract Capacity</td><td className="border p-2">150</td><td className="border p-2">150</td><td className="border p-2">130</td></tr>
                <tr><td className="border p-2">Beginning Inventory</td><td colSpan="3" className="border p-2">100 tires</td></tr>
              </tbody>
            </table>
          </Card>
          
          <Card title="Costs & Rules">
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
              <li><strong>Regular time:</strong> $40 per tire</li>
              <li><strong>Overtime:</strong> $50 per tire</li>
              <li><strong>Subcontract:</strong> $70 per tire</li>
              <li><strong>Carrying cost:</strong> $2 per tire per month</li>
              <li className="text-red-600 font-medium mt-4"><strong>Rule 1:</strong> Carrying costs compound. Producing in March to sell in May costs an extra $4 ($2 × 2 months).</li>
              <li className="text-red-600 font-medium"><strong>Rule 2:</strong> A dummy column ("Unused Capacity") balances total supply (2,780) with total demand (2,550). Cost is $0.</li>
              <li className="text-red-600 font-medium"><strong>Rule 3:</strong> Farnsworth does not allow backorders. Cells allocating future production to past demand are marked with 'X'.</li>
            </ul>
          </Card>
        </div>

        <Card title="Table 4: The Transportation Matrix (Initial Feasible Solution)">
          <div className="bg-slate-50 p-4 border-l-4 border-blue-600 mb-4 text-sm text-slate-800">
            <strong>How to solve:</strong> Go column by column (starting March). Satisfy the demand by allocating units from the available supply rows, <strong>always choosing the available cell with the lowest unit cost</strong> in that column until demand is met. Move to the next column.
          </div>
          
          <div className="overflow-x-auto mt-4 pb-4">
            <table className="w-full text-xs text-left border-collapse min-w-[700px]">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="border p-2 w-1/5" rowSpan="2">SUPPLY FROM</th>
                  <th className="border p-2 text-center" colSpan="4">DEMAND FOR</th>
                  <th className="border p-2 text-center w-24" rowSpan="2">TOTAL CAPACITY (Supply)</th>
                </tr>
                <tr>
                  <th className="border p-2 text-center">Period 1 (Mar)</th>
                  <th className="border p-2 text-center">Period 2 (Apr)</th>
                  <th className="border p-2 text-center">Period 3 (May)</th>
                  <th className="border p-2 text-center">Unused (Dummy)</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Beg Inv */}
                <tr>
                  <td className="border p-2 font-medium bg-slate-100">Beginning Inventory</td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span>100</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">2</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">4</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span></td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">100</td>
                </tr>
                {/* Period 1 */}
                <tr>
                  <td className="border p-2 pl-4 italic bg-white">Mar Regular time</td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">40</span>700</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">42</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">44</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span></td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">700</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4 italic bg-white">Mar Overtime</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">50</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">52</span>50</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">54</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span></td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">50</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4 italic bg-white">Mar Subcontract</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">70</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">72</span>150</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">74</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span></td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">150</td>
                </tr>
                {/* Period 2 */}
                <tr>
                  <td className="border p-2 pl-4 italic bg-slate-50">Apr Regular time</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">40</span>700</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">42</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span></td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">700</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4 italic bg-slate-50">Apr Overtime</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">50</span>50</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">52</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span></td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">50</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4 italic bg-slate-50">Apr Subcontract</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">70</span>50</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">72</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span>100</td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">150</td>
                </tr>
                {/* Period 3 */}
                <tr>
                  <td className="border p-2 pl-4 italic bg-white">May Regular time</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">40</span>700</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span></td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">700</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4 italic bg-white">May Overtime</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">50</span>50</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span></td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">50</td>
                </tr>
                <tr>
                  <td className="border p-2 pl-4 italic bg-white">May Subcontract</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center text-slate-300 bg-slate-100 font-bold text-lg">X</td>
                  <td className="border h-12 relative p-2 align-bottom text-center"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">70</span></td>
                  <td className="border h-12 relative p-2 align-bottom text-center font-bold text-red-600"><span className="absolute top-1 right-1 border rounded bg-slate-50 px-1 font-normal text-slate-500">0</span>130</td>
                  <td className="border p-2 text-center font-bold bg-slate-100 text-blue-800">130</td>
                </tr>
                {/* Total Demand */}
                <tr className="bg-green-100">
                  <td className="border p-2 font-bold text-green-900">TOTAL DEMAND</td>
                  <td className="border p-2 text-center font-bold text-green-800 text-lg">800</td>
                  <td className="border p-2 text-center font-bold text-green-800 text-lg">1,000</td>
                  <td className="border p-2 text-center font-bold text-green-800 text-lg">750</td>
                  <td className="border p-2 text-center font-bold text-green-800 text-lg">230</td>
                  <td className="border p-2 text-center font-bold text-green-900 text-lg">2,780</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            *Red numbers inside cells indicate the allocated amount to fulfill the demand. Small grey numbers in the top right corner represent the unit cost of that specific decision.<br/>
            *Initial Solution Cost: $105,900. (The optimal minimum solution is $105,700).
          </p>
        </Card>
      </div>
    </div>
  );
};

const Summary = () => (
  <div className="space-y-6">
    <SectionHeader title="7. Summary & Key Takeaways" subtitle="Consolidating Chapter 6" />
    
    <div className="grid gap-4 md:grid-cols-3">
      <div className="bg-blue-600 p-6 rounded-xl text-white shadow-md">
        <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><Target className="w-5 h-5"/> 1. S&OP and Aggregate Plan Purpose</h4>
        <p className="text-blue-100 text-sm leading-relaxed">
          Sales and Operations Planning (S&OP) aligns functional areas and supply-chain partners. Its output, the <strong>aggregate plan</strong>, enables manufacturing and service firms to meet changing demand while maintaining a competitive production strategy.
        </p>
      </div>
      <div className="bg-orange-500 p-6 rounded-xl text-white shadow-md">
        <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><Briefcase className="w-5 h-5"/> 2. Scope and Planning Techniques</h4>
        <div className="text-orange-100 text-sm space-y-2">
          <p>Aggregate planning covers an <strong>intermediate horizon (3–18 months)</strong> and sets levels for:</p>
          <ul className="list-disc pl-5">
            <li>Inventory</li>
            <li>Production</li>
            <li>Subcontracting</li>
            <li>Employment</li>
          </ul>
          <p className="pt-2">Key techniques include: Graphical approach, Transportation method (linear programming).</p>
        </div>
      </div>
      <div className="bg-slate-700 p-6 rounded-xl text-white shadow-md">
        <h4 className="font-bold text-xl mb-2 flex items-center gap-2"><PieChart className="w-5 h-5"/> 3. Operational Importance and System Link</h4>
        <p className="text-slate-300 text-sm leading-relaxed">
          The aggregate plan is a major responsibility of operations managers and ensures efficient resource use. It forms the basis for the <strong>master production schedule</strong>, which supports detailed scheduling and MRP systems.
        </p>
      </div>
    </div>
  </div>
);

const Practice = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      q: "In the Figure 1: Graph of Forecast vs. Average Demand, what does the number 50 tubes per day represent?",
      options: [
        "A. The factory’s maximum daily production capacity", 
        "B. The standard production output assumed by the company", 
        "C. The average daily production needed to meet total annual demand", 
        "D. The highest daily demand observed during the year"
      ],
      correct: 2
    },
    {
      id: 2,
      q: "If key cost factors such as subcontracting or hiring costs change, what should management do?",
      options: [
        "A. Maintain the current plan to preserve operational stability", 
        "B. Reassess the trade-offs between cost, flexibility, and workforce stability", 
        "C. Adjust only the most expensive cost component to restore balance", 
        "D. Prioritize minimizing total cost regardless of workforce impact"
      ],
      correct: 1
    },
    {
      id: 3,
      q: "Which strategy is used in Aggregate Plan 1 at ABC Paint Corp.?",
      options: [
        "A. Chase strategy that adjusts workforce to match demand", 
        "B. Pure level strategy with constant production and workforce", 
        "C. Mixed strategy using subcontracting and overtime", 
        "D. Demand smoothing strategy using safety stock."
      ],
      correct: 1
    },
    {
      id: 4,
      q: "What is the main objective of Aggregate Plan 2?",
      options: [
        "A. Minimize inventory holding costs", 
        "B. Maintain a constant workforce and use subcontracting for excess demand", 
        "C. Eliminate subcontracting entirely", 
        "D. Maximize overtime usage"
      ],
      correct: 1
    },
    {
      id: 5,
      q: "How is the workforce sized in Aggregate Plan 2?",
      options: [
        "A. Based on average monthly demand", 
        "B. Based on peak demand", 
        "C. Based on the lowest demand month", 
        "D. Based on subcontractor capacity"
      ],
      correct: 2
    },
    {
      id: 6,
      q: "What is the main purpose of using a mathematical optimization approach in aggregate planning?",
      options: [
        "A. To eliminate demand variability", 
        "B. To treat workforce and production as separate decisions", 
        "C. To find the most cost-efficient production plan under constraints", 
        "D. To maximize subcontracting usage"
      ],
      correct: 2
    },
    {
      id: 7,
      q: "Which method was used to solve the aggregate planning problem?",
      options: [
        "A. Regression analysis", 
        "B. Simulation modeling", 
        "C. Transportation Method of Linear Programming", 
        "D. Decision tree analysis"
      ],
      correct: 2
    }
  ];

  const handleSelect = (qId, optionIdx) => {
    // Only allow selecting if not already answered
    if(answers[qId] !== undefined) return;
    setAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const totalAnswered = Object.keys(answers).length;
  const score = Object.keys(answers).filter(qId => answers[qId] === questions.find(q => q.id == qId).correct).length;

  return (
    <div className="space-y-6">
      <SectionHeader title="8. Practice & Review" subtitle="Test your knowledge on Aggregate Planning" />
      
      <Card>
        <div className="space-y-8">
          {questions.map((question, i) => {
            const isAnswered = answers[question.id] !== undefined;
            
            return (
              <div key={question.id} className="space-y-3">
                <h4 className="font-medium text-slate-800 text-lg">{i + 1}. {question.q}</h4>
                <div className="space-y-2">
                  {question.options.map((opt, oIdx) => {
                    const isSelected = answers[question.id] === oIdx;
                    const isCorrect = question.correct === oIdx;
                    
                    let btnClass = "w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 ";
                    
                    if (!isAnswered) {
                      btnClass += "bg-white border-slate-200 hover:bg-slate-50 hover:border-blue-300 text-slate-700 cursor-pointer";
                    } else {
                      if (isCorrect) {
                        btnClass += "bg-green-50 border-green-500 text-green-800 font-medium";
                      } else if (isSelected && !isCorrect) {
                        btnClass += "bg-red-50 border-red-500 text-red-800 font-medium";
                      } else {
                        btnClass += "bg-white border-slate-200 text-slate-400 opacity-50 cursor-not-allowed";
                      }
                    }

                    return (
                      <button 
                        key={oIdx}
                        onClick={() => handleSelect(question.id, oIdx)}
                        className={btnClass}
                        disabled={isAnswered}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {totalAnswered > 0 && (
            <div className="pt-6 border-t mt-8 space-y-4">
              <div className="text-center text-xl font-bold text-slate-800">
                Current Score: <span className="text-blue-600">{score}</span> / {totalAnswered}
              </div>
              <button 
                onClick={() => setAnswers({})}
                className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 rounded-lg transition-colors"
              >
                Reset Quiz
              </button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [activeTab, setActiveTab] = useState(navigation[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ActiveComponent = {
    home: HomeSection,
    process: PlanningProcess,
    sop: SOP,
    nature: Nature,
    strategies: Strategies,
    methods: Methods,
    cases: CaseStudies,
    summary: Summary,
    practice: Practice,
  }[activeTab];

  const activeIndex = navigation.findIndex(n => n.id === activeTab);
  const prevTab = activeIndex > 0 ? navigation[activeIndex - 1] : null;
  const nextTab = activeIndex < navigation.length - 1 ? navigation[activeIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-1">
              <BookMarked className="text-blue-500" />
              POM Study Guide
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">Group 3 • CC01</div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${
                      isActive 
                        ? 'bg-blue-600 text-white font-medium shadow-sm' 
                        : 'hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-blue-200' : 'text-slate-500'} />
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          Powered by React & Tailwind
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 flex flex-col min-h-screen overflow-hidden">
        
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-slate-200 p-4 flex items-center gap-4 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="text-slate-600 hover:text-slate-900">
            <Menu size={24} />
          </button>
          <span className="font-semibold text-slate-800 truncate">
            {navigation.find(n => n.id === activeTab)?.title}
          </span>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
          <div className="max-w-4xl mx-auto">
            <div className="min-h-[60vh]">
              <ActiveComponent />
            </div>
            
            {/* Bottom Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
              {prevTab ? (
                <button 
                  onClick={() => { setActiveTab(prevTab.id); window.scrollTo(0,0); }}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Previous: {prevTab.title}</span>
                  <span className="sm:hidden">Prev</span>
                </button>
              ) : <div></div>}
              
              {nextTab && (
                <button 
                  onClick={() => { setActiveTab(nextTab.id); window.scrollTo(0,0); }}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors text-right"
                >
                  <span className="hidden sm:inline">Next: {nextTab.title}</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}