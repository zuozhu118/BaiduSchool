
//-----------------------------但是有一个总的原则，那就是this指的是，调用函数的那个对象。-----------------------------------------------------------------------------


//this指向哪里？

//一般而言，在Javascript中，this指向函数执行时的当前对象。

//In JavaScript, as in most object-oriented programming languages, this is a special keyword that is used within methods to refer to the object on which a method is being invoked.

//——jQuery Fundamentals (Chapter 2), by Rebecca Murphey

//值得注意，该关键字在Javascript中和执行环境，而非声明环境有关。

//    The this keyword is relative to the execution context, not the declaration context.



//我们举个例子来说明这个问题：
//eg:
//var someone = {
//    name: "Bob",
//    showName: function () {
//        alert(this.name);
//    }
//};

//var other = {
//    name: "Tom",
//    showNameS: someone.showName
//}

//other.showNameS();//运行的时候是other.showName，所以this指向other.showName函数的当前对象，即other，故最后alert出来的是other.name。

//1,没有明确的当前对象时========================================================

//当没有明确的执行时的当前对象时，this指向全局对象window。
//eg1:
var name = "Tom";

var Bob = {
    name: "Bob",
    show: function () {
        alert(this.name);
    }
}

var show = Bob.show;
show();//this指向全局对象；
//Bob.show();

//eg2:
var x = 1;

function test() {

    this.x = 0; //这里的this.x等价于window.x;

}

test(); 

alert(x); //0



//情况二：作为对象方法的调用

//函数还可以作为某个对象的方法调用，这时this就指这个上级对象。

function test() {

    alert(this.x);

}

var o = {};

o.x = 1;

o.m = test;

o.m(); // 1


//2,apply和call================================================================

//apply和call能够强制改变函数执行时的当前对象，让this指向其他对象。因为apply和call较为类似，所以我们以apply为例：
//复制代码

var name = "window";

var someone = {
    name: "Bob",
    showName: function () {
        alert(this.name);
    }
};

var other = {
    name: "Tom"
};

someone.showName.apply();    //window
someone.showName.apply(other);    //Tom

//apply用于改变函数执行时的当前对象，当无参数时，当前对象为window，有参数时当前对象为该参数。

//3,new关键字=================================================

//new关键字后的构造函数中的this指向用该构造函数构造出来的新对象：


//eg1:
function Person(__name) {
    this.name = __name;        //这个this指向用该构造函数构造的新对象，这个例子是Bob对象
}
Person.prototype.show = function () {
    alert(this.name);  //等价于：alert(Bob.name);
}

var Bob = new Person("Bob");
Bob.show();


//eg2:

var x = 2;

function test() {

    this.x = 1;

}

var o = new test();

alert(x); //2


//4,setTimeout、setInterval和匿名函数=========================
//在浏览器中setTimeout、setInterval和匿名函数执行时的当前对象是全局对象window;
var name = "Bob";
var nameObj = {
    name: "Tom",
    showName: function () {
        alert(this.name);
    },
    waitShowName: function () {
        setTimeout(this.showName, 1000);
    }
};

nameObj.waitShowName();

//所以在运行this.showName的时候，this指向了window，所以最后显示了window.name。














