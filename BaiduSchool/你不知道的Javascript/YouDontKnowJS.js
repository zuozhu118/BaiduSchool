
//===========================================你不知道的JavaScript==================
//ReferenceError（引用错误） 对象表明一个不存在的变量被引用。
//TypeError（类型错误） 对象用来表示值的类型非预期类型时发生的错误。

//===============函数中的作用域：
//function doSomething(a) {
//    function dosomethingelse(a) {
//        return a - 1;
//    }
//    var b;
//    b = dosomethingelse(a * 2) + a;
//    console.log(b*3);
//}
//doSomething(2);//15
////在外面是无法访问dosomethingelse的；
//dosomethingelse(5);//ReferenceError: dosomethingelse is not defined


//=============块作用域：（JS中是没有块级作用域的）
//var vv = true;
//if (vv) {
//    var bb = 3;
//}
//alert(bb);//在外面任然可以拿到bb的值；

//for (let i = 0; i < 3; i++) {
//    alert(i);
//}
//alert(i+"这是外面的i"); //ReferenceError: i is not defined,使用let申明，在{}外是无法访问i的；


//===============先有鸡还是先有蛋：
//1,----------
//a = 3;
//var a;
//alert(a); //3;

//2,-----------
//alert(a);//undefined;
//var a = 5;

//**********************提升：声明本身会被提升，而赋值或其他运行逻辑会留在原地。
//第一个代码片段会被处理成如下形式：
//var a;
//a = 3;
//alert(a);

////第二个代码片段会被处理成如下形式：
//var a;
//alert(a);
//a = 5;

//函数声明会被提升，但是函数表达式却不会被提升：
//foo(); //TypeError: foo is not a function
//var foo = function bar() {
//    alert("我会被打印出来吗？");
//}

//----------即使是具名的函数表达式，名称标识符在赋值之前，
//也无法在所在作用域中使用；
//foo();//TypeError: foo is not a function
//bar();//ReferenceError: bar is not defined
//var foo = function bar() {
//    alert(bar);
//    alert("我会被打印出来吗？");
//}

//-这个代码经过提升之后，实际上被理解为如下形式：
//var foo;
//foo();
//bar();
//foo = function () {
//    var bar;
//    bar = function () {
//        alert("我会被打印出来吗？");
//    }
//};




//------------------------闭包------------------------
////下面这段代码清晰的展示了闭包：
//function foo() {
//    var a = 2;
//    function bar() {
//        alert(a);
//    }
//    return bar;
//}
//var baz = foo();//整个bar函数;

////bar();ReferenceError: bar is not defined
//baz();//2,这就是闭包的效果:我们在bar函数的作用域以外的地方调用了bar函数；


//---------阮一峰：闭包：闭包就是定义在一个函数内部的函数;
//闭包的作用有两个：一是可以直接读取函数内部的变量，二是可以让这些变量始终保存在内存中；
//function f1() {
//    var n = 999;
//    function f2() {
//        n++;
//        //return n;
//        console.log(n);
//    }
//    return f2;
//}

//var result = f1();
//result();
//result();
//result();

//-----------
function createIncrementor(start) {
    return function () {
        start++;
        console.log(start);
        //return start++;
    };
}

var inc = createIncrementor(5);

inc();
inc();
inc();


//---------------------思考题：
//1,
//var name = "The Window";

//var object = {
//    name: "My Object",

//    getNameFunc: function () {
//        return function () {
//            return this.name;
//        };

//    }

//};

//alert(object.getNameFunc()());

//2,
//var name = "The Window";

//var object = {
//    name: "My Object",

//    getNameFunc: function () {
//        var that = this;
//        return function () {
//            return that.name;
//        };

//    }

//};

//alert(object.getNameFunc()());


//======================模块模式==============================
//function CoolModule() {
//    var something = "Cool";
//    var another = [1, 2, 3];
//    function doSomething() {

//        alert(something);
//    }
//    function doAnother() {
//        alert(another.join('|'));
//    }
//    return {
//        doSomethingS: doSomething,
//        doAnotherS: doAnother
//    }
//}
//var foo = CoolModule();
//foo.doSomethingS();//Cool;
//foo.doAnotherS();//1|2|3  


//============================单例模式===============================
//var foo = (function CoolModule() {
//    var something = "Cool";
//    var another = [1, 2, 3];
//    function doSomething() {

//        alert(something);
//    }
//    function doAnother() {
//        alert(another.join('|'));
//    }
//    return {
//        doSomethingS: doSomething,
//        doAnotherS: doAnother
//    }
//})();

//foo.doSomethingS();//Cool;
//foo.doAnotherS();//1|2|3  


//=================导入和导出=====
//bar.js

//function hello(who) {
//    alert("这是bar中的hello方法");
//    return "这是：" + who;
//}
//export hello;

//foo.js

//import hello from "bar";
//hello("AAA");


//-----------------词法作用域：
//function foo() {
//    alert(a);
//}
//function bar() {
//    var a = 3;
//    foo();
//    console.trace();//console.trace()来显示函数堆栈，在需要调试的地方加上下面的一行代码就能显示该函数调用时的上下文关系
//}

//var a = 2;

//bar();


//===========this:调用栈和调用位置：
//function baz() {
//    console.log("baz");
//    //console.trace();
//    bar();
   
    
//}
//function bar() {
//    console.log("bar");
//    console.trace();
//    foo();
    
//}
//function foo() {

//    console.log("foo");

//}
////console.trace();
//baz();


//=========this显示绑定：
//1,硬绑定：
//var a = 13;
//function foo(something) {
//    console.log(this.a, something);//2  3;
//    return this.a + something;
//}
//var obj = {
//    a:2
//};
//var bar = function () {
//    return foo.apply(obj, arguments);//返回foo函数的返回值；
//}
//var b = bar(3);
//alert(b);//2  3;







//=========================================================对象============================================
//===============数组：
//var myArry = ["foo", 42, false, "bar"];
//myArry.baz = "BAZ";
//myArry["add"] = "ADD";
//alert(myArry.length);//4;
//myArry[4] = "four";
//alert(myArry.length);//5
//myArry["5"] = "five";
//alert(myArry.length);//6;


//=============================值和引用类型=================================================================
//var a = [1, 2, 3];
//var b = a;
//b.push(4);
//alert(a);//[1,2,3,4]
//b = [7, 8, 9];

//alert(a);//[1,2,3,4]
//alert(b);//[7,8,9]


//==============for.....of循环=================================================
//遍历数组：
//var arry = [1, 2, 3];
//for (var v of arry) {
//    alert(v);
//}

//========for......in遍历对象===================================================
//var myobject={
//    a:"AA",
//    b:33
//}
//for (var v in myobject) {
//    alert(v);
//}

//=====================for...in 和 for...of 的区别： 
//for...in 遍历每一个属性名称,而 for...of遍历每一个属性值:

//Object.prototype.objCustom = function () {}; 
//Array.prototype.arrCustom = function () {};

//let iterable = [3, 5, 7];
//iterable.foo = "hello";

//for (let i in iterable) {
//  console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
//}

//for (let i of iterable) {
//  console.log(i); //3, 5, 7
//}






//========================(阮一峰)Javascript定义类（class）的三种方法==================================================
//一、极简主义法（推荐）：---------------------------
//继承:
//1,简单继承：
//var Animal = {
//    creatNewobj: function () {
//        var animal = {};
//        animal.foot = "4条腿";
//        animal.foo = function () {
//            alert("睡觉！");
//        }
//        return animal;//creatNewobj方法返回一个对象；
//    }
//};
//var animalnew = Animal.creatNewobj();//animalnew对象就继承了Animal中的所有属性和方法；


////注：Animal.creatNewobj表示整个函数：function () { /...../} ;
////Animal.creatNewobj()表示执行函数之后的返回值：animal;

//animalnew.foot;//4条腿
//animalnew.foo(); //睡觉！

//2,多重继承：
//var Animal = {
//    creatNewobj: function () {
//        var animal = {};
//        animal.foot = "4条腿";
//        animal.foo = function () {
//            alert("睡觉！");
//        }
//        return animal;
//    }
//};

//var Cat = {
//    creatNew: function () {
//        var cat = Animal.creatNewobj();
//        cat.name = "大毛";
//        cat.Eat = function () { alert("一点一点的吃！"); };
//        return cat;
//    }
//};

////让一个对象既继承Animal又继承Cat：
//var cat1 = Cat.creatNew();
//cat1.foo();//睡觉！
//alert(cat1.name);//大毛;

//二、构造函数法---------------------------------------------
//这是经典方法，也是教科书必教的方法,在其内部利用this关键字指代实例对象:
//function Cat() {
//    this.name = "大毛";
//}
////"类"的属性和方法，还可以定义在构造函数的prototype对象之上:

//Cat.prototype.makeSound = function () {

//    alert("喵喵喵");

//}

//var cat1 = new Cat();
//alert(cat1.name); // 大毛
//cat1.makeSound(); //喵喵喵

//三、Object.create()法---------------------------------------
//var Cat = {

//    name: "大毛",

//    makeSound: function () { alert("喵喵喵"); }

//};
////然后，直接用Object.create()生成实例，不需要用到new。

//var cat1 = Object.create(Cat);

//alert(cat1.name); // 大毛

//cat1.makeSound(); // 喵喵喵
////这种方法比"构造函数法"简单，但是不能实现私有属性和私有方法，实例对象之间也不能共享数据，对"类"的模拟不够全面。




//========================================委托：
//Foo = {
//    init: function (who) {
//        this.me = who;
//    },
//    identify: function () {

//        return "I am" + this.me;
//    }

//};
//Bar = Object.create(Foo);
//Bar.speak = function () {
//    alert("Hello," + this.identify() + ",见到你很高兴");
//}
//var b1 = Object.create(Bar);
//b1.init("Jocker");
//var b2 = Object.create(Bar);
//b2.init("罗");
//b1.speak();
//b2.speak();
//alert(b1.me);//Jocker





//=======================类型转换：
//一元运算符+号：
//eg:
//var a = "3.14";
//var b = 5 + +a;
//alert(b);//8.14;
//// + 号，可以将一个字符串强制转为数字；

//eg:将日期显示转为时间戳：
//var nowtime = +new Date();//获取当前时间时间戳；
//alert(nowtime);

//-------------转为时间戳最好还是使用：Date.now();
//var time = Date.now();
//alert(time);


//=====解析字符串和强制类型转换===============
//解析：parseInt;
//强制类型转换:Number;
//var a = "42";
//var b = "42px";
//var e = "字符串42px";
//var c = Number(a);
//var d = parseInt(b);
//var f = parseInt(e);
//alert(c);//42
//alert(d);//42
//alert(f);//NaN

//-------时间转换------------
//var hour = "08";
//var mins = "12";
//hour = parseInt(hour);//8
//mins = parseInt(mins)//12
//alert(hour);
//alert(mins);


//=================================隐式强制类型转换============
//var a = [1, 2];
//var b = [3, 4];
//var c = a + b;
//console.log(c);//1,23,4




//====================================================================================语句=====================================
//var a = 42, b;
//b = (a++, a, 13);//将多个独立的表达式语句串联成一个语句；
//alert(a);
//alert(b);


//=============================try..finally======================================
//function foo() {
//    try {
//        //var A = SSS;//SSS未定义，会报错，会跳转到catch中；
//        alert("执行try");
//        return 16;

//    } catch (e) {
//        alert("执行catch");
//        return 42;
//    }
//    finally {
//        alert("执行finally");
//        return 12;
//    }

//    alert("我会被执行吗？");
//}

//alert(foo());


//=======================try..throw==================================================
//function foo() {
//    try {
//        throw 33;
//    }
//    catch(e){
//        return 22;
//        alert("执行catch");
//    }
//    finally {
//        alert("Hello");
//        return 66;
//    }
//    alert("我会被执行吗？");
//}
//alert(foo()); //函数foo的返回值将会是66；









//=====================================================================异步=======================================================
//function now() {

//    return 21;
//}
//function later() {
//    answer = answer * 2;
//    console.log("结果是什么呢：", answer);
//}
//var answer = now();
//setTimeout(later, 1000);


//------------事件循环：
//var eventLoop = [];
//var event;
//while (true) {
//    if (eventLoop.length>0) {

//        event = eventLoop.shift();
//        try {
//            event();
//        } catch (e) {
//            reportError(e);

//        }
//    }
//    else {
//        alert("错误");
//    }
//}



//============================并行线程==========================================
//var a = 20;
//function foo() {

//    a = a + 1;
//}+ 
//function bar() {

//    a = a * 2;
//}
//foo();
//bar();
//alert(a);//42;


//==================调试：方法的执行顺序：
//A();
//function A() {
//    var a = 12;
//    B(a);
//    var b = 13;
//    b++;
//    alert("这是A方法中的b,   "+b);
//}


//function B(a) {
//    a += 5;
//    alert("这是B方法的a,   "+a);

//}


//--------------------------------------------Prototype继承--------------------------
//Object.prototype.gender = '男';
//function Person(age, name) {
//    this.Name = name;
//    this.Age = age;
//}
//Person.prototype.eyes = "2只眼睛";
//Person.prototype.SayHi = function () {
//    console.log("我是：" + this.Name + ",   年龄：" + this.Age + ",   我有：" + this.eyes+",   性别："+this.gender);
//};
//var per1 = new Person(12, "小李");
//per1.SayHi();

//function Student(age, name,classname) {
//    Person.call(this, age, name);
//    this.ClassNAME = classname;

//}

//Student.prototype = Object.create(Person.prototype);

//Student.prototype.SayHi = function () {
//    console.log("我是：" + this.Name + ",   年龄：" + this.Age + ",   我有：" + this.eyes + ",  我的班级名：" + this.ClassNAME + ",   性别：" + this.gender);
//};
//var student1 = new Student(23, "西西", "9527");
//student1.SayHi();

//参见网址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
//当继承的函数被调用时，this 指向的是当前继承的对象，而不是继承的函数所在的原型对象。

//var o = {
//    a: 2,
//    m: function(){
//        return this.a + 1;
//    }
//};

//console.log(o.m()); // 3
//// 当调用 o.m 时,'this'指向了o.

//var p = Object.create(o);
//// p是一个对象, p.[[Prototype]]是o.

//p.a = 12; // 创建 p 的自身属性a.
//console.log(p.m()); // 13
//// 调用 p.m 时, 'this'指向 p. 
//// 又因为 p 继承 o 的 m 函数
//// 此时的'this.a' 即 p.a，即 p 的自身属性 'a'

//--------------promise--------------------------------------
//-----------ege1:
//let promise = new Promise(function(resolve, reject) {
//    console.log('Promise');
//    resolve('SSS');
//});

//promise.then(function(val) {
//    console.log(val);
//});

//console.log('Hi!');

//--------ege2:
//var someAsyncThing = function () {
//    return new Promise(function (resolve, reject) {
//        // 下面一行会报错，因为x没有声明
//        resolve(x + 2);
//    });
//};

//someAsyncThing().then(function () {
//    console.log('everything is great');
//}).catch(function(err) {
//    console.log("错误啦");
//});
