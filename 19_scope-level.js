// +++++++++++++++++ PART2 SCOPE+++++++++++++++++++++
function grandFather(){
    let icecream1 = "milk"
    console.log(icecream1);
    function son(){
        let icecream2 = "mango"
        function grandSon(){
            let icecream3 = "apple"
            console.log(icecream1);
        }
    }

}
grandFather()
