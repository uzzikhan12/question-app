import { get, getDatabase, onValue, push, ref, set} from "firebase/database";
import app from "./firebaseconfig"
import { useEffect, useState } from "react";

const db = getDatabase(app);

export const sendData = (nodeName:string,data:any) => {
    data.id = push(ref(db, `${nodeName}`)).key;
    const refrence = ref(db , `${nodeName}/${data.id}`)
    set(refrence,data);
}

export const getData = (nodeName: string, id?: any) => {

    const [data,setData] = useState<any>();
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    useEffect(()=>{        

        onValue(reference, (dt) => {
            const value = dt.val();
            console.log(value);
            setData(value);
        });

    },[])
        
        return {data};
  };