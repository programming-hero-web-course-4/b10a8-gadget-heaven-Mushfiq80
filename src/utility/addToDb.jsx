import { toast } from "react-toastify";

const getStoredReadList = () => {
    // read-list
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the read list')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        // ideally trigger toast from the component
        toast('This Product is added to Cart.')
    }
}

const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the read list')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}
const removeFromStoredWishList = (id) => {
    const storedWishList = getStoredWishList(); // Call the function with parentheses
    const updatedWishlist = storedWishList.filter((item) => item !== id); // Filter out the ID
    localStorage.setItem("wish-list", JSON.stringify(updatedWishlist)); // Save the updated list
};

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList, removeFromStoredWishList };