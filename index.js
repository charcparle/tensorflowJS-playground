console.log("Show yourself!")
const shape = [4,2]
const data = tf.tensor([[4,6],[5,9],[13,25],[1,57]])
const dataOne = tf.tensor([4,6,5,9,13,25,1,57],shape)


// set a variable with zeros method
const data2 = tf.variable(tf.zeros([8]));

data.print();
dataOne.print();
data2.print();

data2.assign(tf.tensor1d([3,6,7,23,76,68,445,1]))
data2.print();

// new data sets to try operations
const data3 = tf.tensor1d([3,4,5,6,7]);
const data4 = tf.tensor1d([2,3,4,5,10]);

// add and multiply tensors
data3.add(data4).print();
data3.mul(data4).print();
data3.div(data4).print();