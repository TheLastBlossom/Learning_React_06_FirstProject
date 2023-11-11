export const SaveLocalStorage = (key, item) =>{
    let movies = JSON.parse(localStorage.getItem(key));
    if(Array.isArray(movies)){
        movies.push(item);            
    }else{
        movies = [item];
    }
    localStorage.setItem(key, JSON.stringify(movies));
    return item;
}