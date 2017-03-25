const initialState = {
    users: ['Rysiek']
};

export default function(store = initialState, action){
    console.log(action);
    switch( action.type ){
        case 'KLIKNALEM_GUZIK':
            store.users.push('Grześ');
            return {
                ...store,
                //users2: store.users.push('Wojtek')
            };
            break;
    }
    return store
};