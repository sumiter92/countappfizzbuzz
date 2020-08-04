
exports.fizzbuzzCount= function(req,res){
      const {count}=req.body;
      if (!count || count > 100){
          res.send("please specify a value count between 1 & 100.")
      }
        let resultArray =[];
        let countnow;
        const counttill = count;
        let divisibleby3;
        let divisibleby5;
        for (countnow=1;countnow<=counttill ;countnow++)
        {
            let result = "";
            divisibleby3 = countnow%3 ==0;
            divisibleby5 = countnow%5 ==0;
            if(divisibleby3)
            {
                result+="fizz"
            }
            if (divisibleby5)
            {
                result+="buzz"
            }
            if (!(divisibleby3||divisibleby5))
            {
                result+=countnow;
            }
            resultArray.push(result);
        }
        res.send(resultArray);
}