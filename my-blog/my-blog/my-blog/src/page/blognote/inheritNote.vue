<template>
    <div class="page">
        <div class="inheritNote">
            <h1>继承的具体方式详解</h1>
            <p class="kongxi"></p>
            <h2>一． 继承-原型链继承</h2>
            <p class="kongxi"></p>
            <h3>1.原型链</h3>
            <p class="kongxi"></p>
            <p>每个函数都能构造出一个对象，这个对象内部有个属性指向这个函数的原型对象；</p>
            <p class="kongxi"></p>
            <p>原型对象本质也是一个对象，也是由另外一个构造函数构造出来的，也只想那个构造函数的原型对象；</p>
            <p>以上，形成了一个链式的结构，就成为原型链</p>
            <img src="../../assets/jichenglian.png" width="1000"/>
            <p>上面图示是一个数组的原型链，可自行通过浏览器尝试描绘</p>
            <p class="kongxi"></p>
            <p>构造函数实例化出对象，实例化的对象有个属性__proto__指向对象的原型对象，构造函数的prototype属性指向它的原型对象，这个原型对象也会有个constructor属性指向这个构造函数</p>
            <p class="kongxi"></p>
            <h3>2.原型链的检索规则</h3>
            <p class="kongxi"></p>
            <p>对象.属性的方法去访问属性的时候，先查找有没有对应的实例属性，如果有那么就直接使用</p>
            <p>如果没有，那么就去该对象的原型对象上面去找，如果有那么就直接使用</p>
            <p>如果没有，那么就接着查找原型对象的原型对象，如果有，那么就直接使用，</p>
            <p>如果没有，那么就继续上面的搜索过程</p>
            <p>直到搜索到Object.prototype为止，如果还是没有找到就返回undefined或者是报错</p>
            <p>注意：</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原型链搜索的路径越长，查询属性所花费的时间就越多</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原则：就近原型</p>
            <p class="kongxi"></p>
            <h3>3原型链继承</h3>
            <p class="kongxi"></p>
            <p>定义一个父类</p>
            <div class="daima">
                <pre>function Fun(){
//私有属性
var val = 1;//私有属性
var arr = [1];//私有引用属性
function fun(){}  //私有函数（引用属性）
//实例属性
this.val = 1;  //实例基本属性
this.arr = [1];  //实例引用属性
this.fun = function(){};//实例函数（引用属性）
}
//原型属性
Fun.prototype.val = 1;//原型基本属性
Fun.prototypr.arr = [1];//原型引用属性
Fun.prototype.fun = function(){};//原型函数（引用类型）
//在这个原型函数中，可以使用它所定义的所有属性


                </pre>
            </div>
            <p class="kongxi"></p>
            <p>构造函数，原型，实例之间的关系：每个构造函数都有一个原型对象，原型对象包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针 </p>
            <p class="kongxi"></p>
            <p>具体实现</p>
            <div class="daima">
                <pre>function Super(){
    this.val = 1;
    this.arr = [1];
  }
  function Sub(){
  }
  Sub.prototype = new Super();//核心代码
  var sub1 = new Sub();
  var sub2 = new Sub();//用构造函数创建了两个对象
  sub1.val = 2;
  sub1.arr.push(2);
  alert(sub1.val);//2
  alert(sub2.val);//1
  alert(sub1.arr);//1,2
  alert(sub2.arr);//1,2
</pre>
            </div>
            <p class="kongxi"></p>
            <p>核心：让父类实例充当子类的原型对象</p>
            <p class="kongxi"></p>
            <p>优点：简单，易于实现</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;能通过instanceOf和isPrototypeOf的检测</p>
            <p>缺点：</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.	修改sub1.arr之后sub2.arr也发生了改变，因为来自原型对象的属性是所有实例共享的 </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.	创建子类实例的时，无法向父类构造函数传递参数</p>
            <p class="kongxi"></p>
            <h2>二．借用构造函数</h2>
            <p class="kongxi"></p>
            <p>思想：在子类型构造函数的内部调用超类型构造函数，通过使用call（）和apply（）方法可以在新创建的对象上执行构造函数</p>
            <p class="kongxi"></p>
            <p>实现</p>
            <div class="daima">
                <pre>function Super(val){
    this.val = val;//可以传递参数
    this.arr = [1];
    this.fun = function(){
   }
  }
  function Sub(val){
      Super.call(this,val);//核心代码
      //通过call()和apply()方法在新创建的对象上执行构造函数
  }
  var sub1 = new Sub(1);
  var sub2 = new Sub(2);
  sub1.arr.push(2);
  alert(sub1.val);//1
  alert(sub2.val);//2
  alert(sub1.arr);//1,2
  alert(sub2.arr);//1
  console.log(sub1.fun === sub2.fun);//false
  console.log(sub1.arr === sub2.arr);//false
</pre>
            </div>
            <p class="kongxi"></p>
            <p>核心：借用父类的构造函数增强子类，等于就是把父类的实例属性复制一份给子类实例装上（没有用到原型）；</p>
            <p class="kongxi"></p>
            <p>优点：解决了子类实例共用父类属性的问题</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建子类实例时可以向父类构造函数传参</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以实现多继承（call多个父类对象）</p>
            <p>缺点：方法在函数中定义，无法得到复用</p>
            <p class="kongxi"></p>
            <h2>三．组合继承</h2>
            <p class="kongxi"></p>
            <p>思想：使用原型链实现对原型属性跟方法的继承，通过构造函数实现对函数实例属性的继承。这样，既能通过在原型上定义方法实现函数的复用，又能保证每个实例都有自己的属性</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    SuperType.call(this, name);//借用构造函数继承属性，二次调用
    this.age = age;
}
SubType.prototype = new SuperType();//借用原型链继承方法，一次调用
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29
var instance2 = new SubType("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27

</pre>
            </div>
            <p class="kongxi"></p>
            <p>优点：继承了前两者的优点</p>
            <p>缺点：两次调用父构造函数，浪费内存</p>
            <p class="kongxi"></p>
            <h2>四．原型式继承</h2>
            <p class="kongxi"></p>
            <p>这种继承借助原型并给予已有的对象创造新对象，同时还不用创建自定义的方式称为原型式继承</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>function beget(obj){
    var F = function(){};
    F.prototype = obj;
    return new F();
  }
  function Super(){
   this.val = 1;
   this.arr = [1];
}
//拿到父类对象
var sup = new Super();
var sub = beget(sup);
sub.attr1 = 1;
sub.attr2 = 2;
</pre>
            </div>
            <p class="kongxi"></p>
            <p>优点：从已有的对象上衍生新的对象，不需要自定义类型</p>
            <p>缺点：原型的属性会被所有实例共享</p>
            <p class="kongxi"></p>
            <h2>五．寄生继承</h2>
            <p class="kongxi"></p>
            <div>
                <pre>function createAnother(original){
    var clone = object(original); //通过调用函数创建一个新对象
    clone.sayHi = function(){ //以某种方式来增强这个对象
        alert("hi");
    };
    return clone; //返回这个对象
}
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"
</pre>
            </div>
            <p class="kongxi"></p>
            <p>在原型式继承加了个增强对象</p>
            <p>创建对象-增强-返回</p>
            <p>缺点：函数无法复用</p>
            <p class="kongxi"></p>
            <h2>六．寄生组合式继承</h2>
            <p class="kongxi"></p>
            <p>思想：借用函数来继承属性，通过原型链的混成形式来继承方法</p>
            <p class="kongxi"></p>
            <div class="daima">
                <pre>function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype); //创建对象
    prototype.constructor = subType; //增强对象
    subType.prototype = prototype; //指定对象
}
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);//实现继承
SubType.prototype.sayAge = function(){
    alert(this.age);
};
</pre>
            </div>
            <p class="kongxi"></p>
            <p>完美</p>
            <p>效率高（只调用了一次SuperType构造函数，避免在SubType.prototype上面创建你不要、多余的属性）</p>
            <p>而且原型链保持不变，能够正常使用instanceOf和isPrototypeOf()</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inheritNote"
    }
</script>

<style scoped>
    .page{
        background-color: rgb(241,241,241);
        height: 100%;
        width: 100%;
        padding: 20px 20% 0 20%;
    }
    .inheritNote{
        width: 100%;
        background-color: #fff;
    }
    .kongxi{
        height: 20px;
    }
    .daima{
        border: 1px solid black;

    }
</style>
