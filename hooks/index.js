const ReactX = (() => {
    let state;
    const useLocalState = (key, initalValue) => {

        const getlocalStorage = () =>{
            const localData = localStorage.getItem(initalValue);

            if(localData){
                return localData;
            }

            return initalValue;
        }

        const setLocalStorage = (value) => {
            localStorage.setItem(key, value);
        }

        if(state === undefined){
            state =  getlocalStorage();
        }
        
        const setterFunction = (key, value) => {
            setLocalStorage(key, value);
            state = value;
        }

        return [state, setterFunction]
    };
    
    return{
        useLocalState
    }
})();

const { useLocalState } = ReactX;

const Component = () => {
    const [counterValue, setCounterValue] =  useLocalState("counter", "1");
    console.log(counterValue);

    setCounterValue("counter", "2")
};


Component();
Component();