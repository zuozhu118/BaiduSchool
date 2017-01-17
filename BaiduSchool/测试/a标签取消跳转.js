


$(function () {
    //test();//测试变量作用域；
    //test2();//测试全局变量；
    //test3();
    //test4();
    //TestFalse();//测试错误
    //walkTree(arrys);//递归树；
});

function ff() {
    alert(123);
    return false;//取消超链接标签的跳转；
}

////测试=========== return =======
//function sum(a, b) { return a + b; }
//function calc1() { sum(1, 2); }
//function calc2() { return sum(1, 2); }
//alert(calc1());//undefined;
//alert(calc2());//3

//==================JS中的变量作用域===========

//function test() {
//    if (true) {
//        var x = 5;
//    }
//    console.log(x);//例如，如下的代码将在控制台输出 5，因为 x 的作用域是声明了 x 的那个函数（或全局范围），而不是 if 语句块。
//}

//===============JS全局变量===================
//window.name = "卡索";
//var a = "Hello";
//function test2() {
//    alert(a);
//    alert(name);
//    a = "World";
//    alert(a);
//}
//===============语句块（Block Statement）======
//function test3() {
//    var x = 1;
//    {
//        var x = 2;
//    }
//    alert(x);

//}

//=================连续语句（continue Statement）=======
//function test4() {
//    i = 0;
//    n = 0;
//    while (i < 5) {
//        i++;
//        if (i == 3) {
//            continue;
//        }
//        n += i;
//        alert(i + '，   i的值');
//        alert(n + '，   n的值');
//    }

//}


//========================try...catch 语句=====================
//function getMonthName(mo) {
//    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
//                  "Aug", "Sep", "Oct", "Nov", "Dec"];
//    if (months[mo]) {
//        return months[mo];
//    } else {
//        throw "InvalidMonthNo"; 
//    }
//}

//try { 
//    monthName = getMonthName(15); // function could throw exception
//}
//catch (e) {
//    monthName = "unknown";

//    alert(e);// e 指的是throw抛出的语句；
//    alert(monthName);
//}
//=======================终结块（The finally Block）=================
//function f() {
//    try {
//        alert(0);
//        throw "bogus";  //抛出throw就会执行catch块中的代码；
//    } catch (e) {
//        alert(1);
//        return true; 
//        alert(2); // not reachable
//    } finally {
//        alert(3);
//        return false; // overwrites the previous "return"
//        alert(4); // not reachable
//    }
//    alert(5); // not reachable
//}
//f();


//======================函数表达式(function expression)======================
//var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };

//alert(factorial(5));

//==========错误代码====================
//function TestFalse() {
//    console.log(square(7)); // square is not defined
//   var square = function add (n) {
//        return n * n;
//    }
//}

//=====================递归=============
//获取树结构中所有的节点时，递归来实现要容易得多：
//var arrys = { arry1: [1, 3, 5, 7], arry2: [2, 4, 6], arry3: [10, 11] };
//function walkTree(node) {
//    if (node == null) {
//        return;
//    }
//    for (var key in node) {
//        alert(node[key]);
//        walkTree(node[key]);
//        //ff();
//        alert("你看我什么时候执行--");
//    }
//}
//function ff() {

//    alert("这是ff中的方法");
//    alert('ffffff');
//}
//============递归2====================
//function foo(i) {
//    if (i < 0){
//        return;
//    }
//    console.log('begin:' + i);
//    foo(i - 1);
//    console.log('end:' + i);
//    //alert('end开始啦')
//}
//foo(3);

//==========嵌套函数和闭包===============================

//function outside(x) {
//    function inside(y) {
//        return x + y; //x,y表示传递的参数名；
//    }
//    return inside;
//}
//// Think of it like: give me a function that adds 3 to whatever you give it
//fn_inside = outside(3);
//result = fn_inside(5); // returns 8

//result1 = outside(3)(5); // returns 8
//alert(result);
//alert(result1);

//==========================多层嵌套函数=========================
//function A(x) {
//    function B(y) {
//        function C(z) {
//            console.log(x + y + z);
//        }
//        C(3);
//    }
//    B(2);
//}
//A(1); // 控制台输出 6 (1 + 2 + 3)


//=================闭包(Closures)=============

//闭包是JavaScript中最强大的特性之一。
//JavaScript允许函数嵌套，
//并且内部函数可以访问定义在外部函数中的所有变量和函数，
//以及外部函数能访问的所有变量和函数。
//但是，外部函数却不能够访问定义在内部函数中的变量和函数。
//这给内部函数的变量提供了一定的安全性。
//而且，当内部函数生存周期大于外部函数时，
//由于内部函数可以访问外部函数的作用域，
//定义在外部函数的变量和函数的生存周期就会大于外部函数本身。
//当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。


//var pet = function (name) {          //外部函数定义了一个变量"name"
//    var getName = function () {
//        //内部函数可以访问 外部函数定义的"name"
//        return name+"：是什么呢？";
//    }

//    return getName; //getName表示function() { return name+"：是什么呢？";}
//},
//myPet = pet("Vivie");  // pet("Vivie")表示function() { return name+"：是什么呢？";}

//myPet();  //myPet()表示立即执行function() { return name+"：是什么呢？";}
//alert(myPet());

//=================使用arguments对象=========================================================
//function myConcat(separator) {
//    //alert(separator);//separator表示arguments中的第一个参数arguments[0];
//    var result = "";
//    for (var i = 1; i < arguments.length; i++) {
//        //alert(arguments[i]);
//        result += arguments[i] + separator;
//    }
//    return result;
//}
//var color = myConcat("|   ", "red", "orange", "blue");
//alert(color);

//=================================typeof=================================================
//typeof A
//typeof (A)

//typeof 操作符返回一个表示 A 类型的字符串值。A 可为字符串、变量、关键词或对象，其类型将被返回。A 两侧的括号为可选。

//假设你定义了如下的变量：

//var myFun = new Function("5 + 2");
//var shape = "round";
//var size = 1;
//var today = new Date();

//typeof 操作符将会返回如下的结果：

//typeof myFun;     // returns "function"
//typeof shape;     // returns "string"
//typeof size;      // returns "number"
//typeof today;     // returns "object"
//typeof dontExist; // returns "undefined"

//对于关键词 true 和 null， typeof 操作符将会返回如下结果：

//typeof true; // returns "boolean"
//typeof null; // returns "object"

//对于一个数值或字符串， typeof 操作符将会返回如下结果：

//typeof 62;            // returns "number"
//typeof 'Hello world'; // returns "string"

//对于属性值，typeof 操作符将会返回属性所包含值的类型：

//typeof document.lastModified; // returns "string"
//typeof window.length;         // returns "number"
//typeof Math.LN2;              // returns "number"

//对于方法和函数，typeof 操作符将会返回如下结果：

//typeof blur;        // returns "function"
//typeof eval;        // returns "function"
//typeof parseInt;    // returns "function"
//typeof shape.split; // returns "function"

//对于预定义的对象，typeof 操作符将会返回如下结果：

//typeof Date;     // returns "function"
//typeof Function; // returns "function"
//typeof Math;     // returns "object"
//typeof Option;   // returns "function"
//typeof String;   // returns "function"


//=======================================================instanceof===================================

//如果对象是某种指定类型(object type)返回true.语法如下：

//objectName instanceof objectType

//objectName 是对象的名称相较于objectType,objectType是对象的类型, 例如Date或 Array.

//当你需要确认一个对象在运行时的类型时使用instanceof.例如, 抓取异常, 你可以根据抛出异常的类型分类处理异常代码.
//eg:
//function Intanceof() {
//    var name = new Number("Howdy");
//    var res = name instanceof String;
//    alert(res);//false
//}
//Intanceof();

//====================================================this===============================================

//使用this keyword关键字来指代当前对象(current object)，通常，this指代的是方法中正在被调用的对象. 用法如下

//this["propertyName"]
//this.propertyName

//Example 2.
//当和表单的属性相结合时，this.form可以指代当前对象的父元素表单。
//例如在以下例子中，表单myFrom包含了一个文本对象和一个按钮。
//当用户点击按钮的时候，文本对象的value值将会变成表格的名字。按钮的onClick处理事件使用this.form来指代父元素表单myForm。

//<FORM NAME="myForm">
//Form name:<INPUT TYPE="text" NAME="text1" VALUE="Beluga">
//<P>
//<INPUT NAME="button1" TYPE="button" VALUE="Show Form Name"
//onClick="this.form.text1.value = this.form.name;">
//</FORM>


//============================键值对MAP对象======================
//var map = new Map();
//map['key1'] = '卡索';
//map['key2'] = '张起灵';
//map['key3'] = '二月红';
//for (var key in map) {
//    //alert(map[key]);
//}

//===================对象和属性======================================
//例如，我们创建一个myCar的对象然后给他三个属性，make，model，year。具体如下所示：

//var myCar = new Object();
//myCar.make = "Ford";
//myCar.model = "Mustang";
//myCar.year = 1969;

////对象中未赋值的属性的值为undefined（而不是null）。

////myCar.noProperty; // undefined

////JavaScript 对象的属性也可以通过方括号访问或者设置:
//alert(myCar['make']); //"Ford"

//=============使用构造函数创建对象=============================================
//例如，你想为汽车创建一个类型，并且将这类对象称为 Car ，并且拥有属性 make, model, 和 year，你可以创建如下的函数：

//function Car(make, model, year) {
//    this.make = make;
//    this.model = model;
//    this.year = year;
//}

////注意通过使用 this 将传入函数的值赋给对象的属性。

////现在你可以象这样创建一个 mycar 对象：

//var mycar = new Car("Eagle", "Talon TSi", 1993);
//alert(mycar.make);//Eagle

////你可以通过调用 new 创建任意数量的 car 对象。例如：

//var kenscar = new Car("Nissan", "300ZX", 1992);
//alert(kenscar.make);

//给对象类型增加属性：======================
//你可以通过 prototype 属性为之前定义的对象类型增加属性。
//这为该类型的所有对象，而不是仅仅一个对象增加了一个属性。

//下面的代码为所有类型为 car 的对象增加了 color 属性，然后为对象 mycar 的 color 属性赋值：

//Car.prototype.color = null;
//mycar.color = "black";
//alert(mycar.color); 
//==============================使用 Object.create 方法创建对象============================
//对象也可以用 Object.create() 方法创建。
//该方法非常有用，因为它允许你为创建的对象选择其原型对象，而不用定义一个构造函数。
//var Animal = {
//    color: "Red",  //color是自定义类型Animal类型的一个属性；（名字可以随便取）
//    method: function () {  //method是Animal类型中的一个方法；（名字可以随便取）
//        alert(this.color);
//    }
//}
////创建一个Animal类型的对象animal1:
//var animal1 = Object.create(Animal);
//animal1.method();

//================================定义方法=========================
//你可以在对象的构造函数中包含方法定义来为某个对象类型定义方法。
//function display() {

//    alert('这是一个普通的叫display的方法');
//}
//function Car(make, model, year) {
//    this.make = make;
//    this.model = model;
//    this.year = year;
//    this.method = display; //method是Car类型对象中的方法（名称随意取）；
//}
//var car1 = new Car('JACK', '男', '2016-1-1');
//car1.method();

//======================================= 闭包 ============= 
//function f() {
//    var n = 999;
//    function f1() {
//        n += 1;
//        alert(n);
//        return n;
//    }
//    return f1; //f1表示整个f1方法，而f1()表示f1方法的返回值，也就是n,这两个是完全不一样的；
//}
//var result = f(); //f()表示f方法的返回值，也就是return后面的f1,f1表示整个f1方法；
//result();

//===============JavaScript中没有块级作用域======================================
//for (var i = 0; i < 3; i++) {

//}
//alert(i); //在块for的外面，仍然可以访问i;

//=========================================严格模式================================
//1,非严格模式下：
//function M(a) {
//    arguments[0] = 100;
//    console.log(a);
//}
//M(12);

//2,严格模式下：
//function M(a) {
//    'use strict'; //使用'use strict'表示严格模式；
//    arguments[0] = 100;
//    console.log(a);
//}
//M(12);

//==============================prototype原型链==============================
//1,----------
//function foo() { }//创建一个函数对象foo;
//foo.prototype.z = 5;
//var obj = new foo();
//obj.x = 1;
//obj.y = 2;
////alert(obj.z);
////var own = obj.hasOwnProperty("x");//true;
//var own = obj.hasOwnProperty("z");//false;
//var str = typeof obj.toString;//"function"，toString是原型链上的属性；
//2,----------
//原型模式:

//JS每个函数都有一个prototype(原型)属性，这个属性是一个指针，指向一个对象，
//它是所有通过new操作符使用函数创建的实例的原型对象。
//原型对象最大特点是，所有对象实例共享它所包含的属性和方法，也就是说，所有在原型对象中创建的属性或方法都直接被所有对象实例共享。

//function Person(){
//}
//Person.prototype.name = 'Jack';//使用原型来添加属性
//Person.prototype.age = 29;
//Person.prototype.getName = function(){
//    return this.name;
//}
//var person1 = new Person();
//alert(person1.getName());//Jack
//var person2 = new Person();
//alert(person1.getName === person2.getName);//true;共享一个原型对象的方法


//-----------------------------原型模式的缺点
//原型模式的缺点，它省略了为构造函数传递初始化参数，这在一定程序带来不便；
//另外，最主要是当对象的属性是引用类型时，它的值是不变的，总是引用同一个外部对象，所有实例对该对象的操作都会其它实例：

//function Person() {
//}
//Person.prototype.name = 'Jack';
//Person.prototype.lessons = ['Math', 'Physics'];
//var person1 = new Person();
//person1.lessons.push('Biology');
//var person2 = new Person();
//alert(person2.lessons);//Math,Physics,Biology，person1修改影响了person2

//========================create方式创建对象===================================
//function foo() { }
//foo.prototype.F = "FFF";
//var obj = new foo();
//obj.x = 1;
//obj.y = 2;
//var obj2 = Object.create(foo.prototype);
//alert(obj2.F);//FFF;
//======================属性操作=================================================
//1,用字面量的方式创建对象，并直接给对象的属性赋值：
//var obj = { x: "卡卡", y: 6 };
//alert(obj.x);//卡卡
////==删除属性：
//delete obj.x;
//alert(obj.x);//undefined;

//var del = delete obj; //false,全局变量和局部变量是不能删除的；
//delete Object.prototype;//false；
//alert(del);

//==================================获取属性标签：Object.getOwnPropertyDescriptor======

//var obj = {name:"晓明"};
//var descriptor = Object.getOwnPropertyDescriptor(obj, "name");
////writable:是否可任意写
////configurable：是否能够删除，是否能够被修改
////enumerable：是否能用 for in 枚举
//alert(descriptor.enumerable); //true;
//alert(descriptor.configurable);//true;
//alert(descriptor.writable);//true;


//=============================给对象添加自定义单个属性：Object.defineProperty=========================================
//注释：Object.defineProperty()方法，
//默认的设置enumerable，configurable，writable都是false;
//如果要对属性进行修改操作，就要修改enumerable，configurable，writable的值，设为true;
//var car = new Object;
//car.price = 5000;
//Object.defineProperty(car, 'color', { value: 'red', enumerable: true,configurable:true,writable:true });//给car对象增加了一个color属性，color属性的值是red;
//alert(car.color);//red;


//==========================给某个对象定义多个属性：Object.defineProperties()======================
//var objs = {};
//Object.defineProperties(objs, {
//    name: {value:"小王",enumerable:true,configurable:false},
//    age: { value: 23, writable: true },
//    gender: {value:'女'}
//});
//alert(objs.name+',   '+objs.age+',   '+objs.gender);


//======================获取对象属性的标签值：defineProperties方法：（获取enumerable，configurable，writable的值）
//var objs = {};
//Object.defineProperties(objs, {
//    name: { value: "小王", enumerable: true, configurable: false },
//    age: { value: 23, writable: true },
//    gender: { value: '女' }
//});
//var des = Object.getOwnPropertyDescriptor(objs, 'name');
//alert(des.value);//小王；
//alert(des.enumerable);//true;
//alert(des.writable);//false; 默认是false;
//alert(des.configurable);//false;

//======================get/set获取和设置属性值的方法======
//------------get和set的第一种写法：
//var age = 22;
//var obj = {
//    name: "小凡",
//    get age() {
//        return age;
//    },
//    set age(value) {
//        age = value;
//    }
//};

//alert(obj.age);
//obj.age = 32; //我们在外面给age赋的值就是传递给set方法中的参数val;
//alert(obj.age);


//---------------get和set的第二种写法：
//var lost = {
//    loc: "Island"
//};
//Object.defineProperty(lost, "location", {
//    get: function () {
//        return this.loc;
//    },
//    set: function (val) {
//        this.loc = val+"世界的";
//    }
//});
//lost.location = "Another island";
//alert(lost.location);
//=================get/set方法与原型链=======================
//var ooo = {};
//Object.defineProperty(ooo, 'gender', { value: '女' }); //因为默认的defineProperty方法创建的属性的enumerable，configurable，writable都是false，所以是不能修改的；
//var o2 = Object.create(ooo);
//alert(o2.gender);//女
//o2.gender = '男';
//alert(o2.gender);//女

//var ooo = {};
//Object.defineProperty(ooo, 'gender', { value: '女',writable: true }); 
//var o2 = Object.create(ooo);//设置o2对象指向原型对象ooo,这样ooo中的属性和方法，在o2对象中都可以使用；
//alert(o2.gender);//女
//o2.gender = '男';
//alert(o2.gender);//男

//var a = 3;
//a =+5;
//alert(a);

//===============================================数组===================================================

//----------sort()方法排序：
//var arry = [11,5,22,36,1];

//arry.sort(function (a, b) {

//    return a > b;
//});
//alert(arry);//[1,5,11,22,36]


//----------concat合并数组：
//var arry1 = [1, 5, 9];
//var arry2 = arry1.concat([33, 44, 55], 66);
//alert(arry2);//1, 5, 9,33, 44, 55,66

//--------slice截取数组中的元素：
//var arry1 = [1, 2, 3, 4, 5];
//var arry2 = arry1.slice(1, 3);//1和3都表示索引；左闭右开；
//var arry3=arry1.slice(1,-1);//-1,表示最后一个元素5，因为是左闭右开的区间，所以截取不到5； //注意：截取只能从左往右截取；
//alert(arry2);//2,3;
//alert(arry3);//2,3,4

//-------splice截取数组中元素，并改变原数组中的值：
//var arry1 = [1, 2, 3, 4, 5];
//var arry2 = arry1.splice(1, 3);//第一个参数表示索引，第二个参数表示元素的个数；
//alert(arry1);//原数组arry1的值发生了改变，变成了1,5
//alert(arry2);//2,3,4


//--------map方法对数组进行一个映射：
//var arry1 = [1, 2, 3, 4, 5];
//var arry2 = arry1.map(function (a) {

//    return a + 10;//将数组中的每个值加10；
//});
//alert(arry1);
//alert(arry2);


//----------reduce方法对数组中的两个元素执行某种操作：
//var arry1 = [12, 3, 6, 9, 15];
//arry1.reduce(function (a, b) {
//    //reduce方法首先将12，和3作为a和b的值，
//    //执行a - b操作后，将9作为a, 将数组中的元素6作为b，然后又执行sum = a - b操作，以此类推；
//    //alert(a);
//    //alert(b);
//    sum = a -b;
//    return sum;
//});
//alert(sum);//-21;



//====================================this关键字========================
//var o1 = {
//    age: 22,
//    ff: function () {
//        this.age += 5;//this表示对象o1
//        return this.age;
//    }
//};
//alert(o1.ff());


//======================================call函数=============================
////function identify() {
////    return this.name.toUpperCase();
////}
////var me = {
////    name: "Kyle"
////};

////var you = {
////    name: "Reader"
////};

////identify.call(me); // KYLE
////identify.call(you); // READER

////---例2：----------
//function Animal() {
//    this.name = '动物';
//    this.showName = function () {
//        alert(this.name);//this表示当前调用shwoName方法的对象；
//    }
//}
//function Cat() {
//    this.name= '毛';
//}
//var animal = new Animal();
//var cat = new Cat();
////通过call或apply方法，将原本属于Animal对象的showName()方法交给对象cat来使用了。   
//animal.showName.call(cat);
////call 的意思是把 animal 的方法放到cat上执行，
////原来cat是没有showName() 方法，
////现在是把animal 的showName()方法放到 cat上来执行，所以this.name 应该是 "毛"。