如果你已经对 React 开发比较熟悉，就会知道子组件的 state 可以上提 (state hoisting)，由父组件来管理：

子组件间接回调到父组件的 setState 的方法来改变父组件的 state；
新的 state 通过 props 的形式把再次被子组件获悉。

而 dva 可以帮助我们把 state 上提到 所有 React 组件之上，过程是相似的：

页面通过调用 dispatch 函数来驱动 dva model state 的改变；
改变后的 dva model state通过 connect 方法注入页面。

所谓「注入」从本质上是 控制反转 的一种实现，这种思想在许多的语言框架中都有体现，最著名的莫过于基于 Java 语言的 Spring。组件不再负责管理数据，组件只是通过 connect 向 dva 声明所需数据。