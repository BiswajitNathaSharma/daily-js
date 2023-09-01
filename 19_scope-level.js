// +++++++++++++++++ PART2 SCOPE+++++++++++++++++++++
function grandFather() {
    let icecream1 = "milk";
    console.log(icecream1);//   grandfather can only Access the variable of thet are declared in his own scope, can't access the variable of father and grandson, because they are declared in another scope.

    function father() {
        let icecream2 = "mango";
        console.log(icecream1, icecream2);// father can't Access the icecream3 because father is out of scope from grand son but in side the grandfather's scope, so he can only use the variable of grandfather.

        function grandSon() {
            let icecream3 = "apple";
            console.log(icecream1, icecream2, icecream3); //grandSon has the access to all variables of his father and grandfather because he is inside the scope both father and grand father. 
        }
        grandSon();
    }
    father();
}
grandFather();
