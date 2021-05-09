console.log("Show yourself!")
const shape = [4,2]
const data = tf.tensor([[4,6],[5,9],[13,25],[1,57]])
const dataOne = tf.tensor([4,6,5,9,13,25,1,57],shape)


// set a variable with zeros method
const data2 = tf.variable(tf.zeros([8]));

data.print();
dataOne.print();
