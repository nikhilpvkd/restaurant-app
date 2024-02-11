import Header from "./components/Header";
import Dishes from "./pages/Dishes";
import { api } from "./features/api/api";

function App() {
    const { isLoading } = api.endpoints.getAllDishes.useQueryState();

    if (isLoading) {
        return (
            <div className="wrapper">
                <h3>Loading....</h3>
            </div>
        );
    }
    return (
        <div className="wrapper">
            <Header />
            <Dishes />
        </div>
    );
}

export default App;
