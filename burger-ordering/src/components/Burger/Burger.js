// import react from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props=>{
    //TO GET INGREDIENTS DYNAMICALLY,so on inspect we hv to first convert Object into Array of values of the ingredients.
    //For tht we use js func. i.e. 'Object' w/c extracts the key of given obj. & convert it into array(so it gives u arrays of key).
    //Frm below 1st-Line, we got the Array of strings(i.e. key) in end.
    //2-Line,elts in array are properties,salad and so on. MAP() executes a fn. on each elt. in their i/p array.Here igKey is salad,cheese etc.
    //3-Line, We convert them in empty array for eg: [...array(2)]=[,] .Then We apply map on each, first arg is empty
    
    //Below FUNCTION is gooing to be array though in end.
    let transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map((_,index) => {
                return <BurgerIngredient key={igKey+index} type={igKey}/> ;
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        },[]);
        console.log(transformedIngredients)   
        if(transformedIngredients.length === 0){
            transformedIngredients=<p>Please add ingredients</p>
        }    

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {/* NOW PASS ALL ingredients THAT R IN MIDDLE OF BREAD */}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
};

export default burger;