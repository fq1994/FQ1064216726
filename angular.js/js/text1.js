function firstController($scope){
          $scope.data=[
              {
                  'id':1000,
                  'name':'iphone5s',
                  'num':5,
                  'price':4500
              },
              {
                  'id':2000,
                  'name':'iphone4s',
                  'num':4,
                  'price':3500
              },
              {
                  'id':3000,
                  'name':'iphone3s',
                  'num':3,
                  'price':2500
              },
              {
                  'id':4000,
                  'name':'iphone6s',
                  'num':6,
                  'price':6500
              }
          ];
    $scope.priceSum=function(){
        var allPrice=0;
        angular.forEach($scope.data,function(value,key){
            allPrice+=(value.price)*value.num
        });
        return allPrice;
    };
    $scope.numSum=function(){
        var sum=0;
        angular.forEach($scope.data,function(value){
            sum+=value.num;
        });
        return sum;
    };
    $scope.remove=function(id){
          var index=-1;
        angular.forEach($scope.data,function(value,key){
            if(value.id==id){
                index=key;
                console.log(index)
            }
        });

          if(index!=-1){
              $scope.data.splice(index,1)
          }

    };
    $scope.add=function(id){

        angular.forEach($scope.data,function(value,key){
            if(value.id==id){
                value.num++

            }
        });

    };
    $scope.reduce=function(id){

        angular.forEach($scope.data,function(value,key){
            if(value.id==id){
                value.num--;
                if(value.num==0){
                    $scope.remove(id)
                }

            }
        });

    };
    //$scope.$watch('data',function(newValue,oldValue){
    //    console.log(newValue);
    //    angular.forEach(newValue,function(value,key){
    //        if(value.num<1){
    //            var returnKey=confirm('从购物车内删除该产品！');
    //            if(returnKey){
    //                $scope.remove(value.id);
    //            }else{
    //                value.num=oldValue[key].num;
    //            }
    //
    //            //return ;
    //        }
    //    })
    //},true);
}