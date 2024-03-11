
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getTest, searchTest} from "./service/getService";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch();

    const dataSearch = useSelector(state => {
        return state.tests.search
    })
    const
        data = useSelector((state) => {
            if (dataSearch === '' && state.tests.tests !== undefined) {
                return state.tests.tests
            } else if (dataSearch !== '' && dataSearch !== undefined) {
                return dataSearch
            }
        })


    useEffect(() => {
        dispatch(getTest());
    }, []);
    return (
        <>
            <input onInput={(e) => {
                console.log(e.target.value)
                dispatch(searchTest(e.target.value))
            }}/>
            <table className="table">
                <tr>
                    <th scope="col">img</th>
                    <th scope="col">Last</th>
                </tr>
                {
                    data.map(item => (
                        <tr>
                            <td><img src={`${item.flags.png}`} alt="" style={{width: '50px', height: '50px'}}/></td>
                            <td>{item.name.common}</td>
                        </tr>
                    ))}

            </table>

        </>
    );
}

export default App;
