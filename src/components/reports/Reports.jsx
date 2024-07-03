import AllReports from "./AllReports"
import ReportDetail from "./ReportDetail"

function Reports() {
    return (
        <div style={{
            marginLeft: '250px',
        }} className="px-10 mt-10">

                <div className="bg-white px-4 rounded-xl overflow-hidden flex items-start">
                <AllReports /> 
                <ReportDetail />

                </div>
        </div>
    )
}
export default Reports