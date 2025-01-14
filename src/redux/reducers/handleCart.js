const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    
    switch (action.type) {
        case "ADD_ITEM":
            // Check if Product already exists
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }

        case "DEL_ITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
        
            case "DEL_ONE_ITEM":
                return state = state.filter((x) => {
                    return  x.id !== product.id
                });
                
        default:
            return state;
    }
};

export default handleCart;
