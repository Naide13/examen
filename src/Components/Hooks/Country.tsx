import {useState, useRef, useEffect} from 'react'
import { ID, IReqRestApi } from '../interfaces/IReqRestApiusers';
import ReqRestApi from '../Api/ReqRestApi';
const DEFAULT_PAGE = 1;
export const Country = () => {
    const [contrys, setContrys] = useState<ID[]>([]);
    const currentPage = useRef(DEFAULT_PAGE);
        const getData = async () => {
            const response = await ReqRestApi.get<IReqRestApi>(
                '/Country', { params: { page: currentPage.current } }).then(
                    ({ data }) => data
                ).catch(console.log);
            response ? setContrys(response.data): setContrys([]);
        }
    useEffect(() => { getData(); }, []);
    return {
        contrys
    }
}