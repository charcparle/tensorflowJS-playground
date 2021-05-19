/*
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
*/

// define my model
function simpleAdd(input1, input2){
    //tidy is used to free up GPU momory once returned

    return tf.tidy(()=>{
        const x1 = input1;
        const x2 = input2;
        const y = x1.add(x2);
        return y;
    })
}

// new 1d tensors
const data1 = tf.tensor1d([2,3,8,45]);
const data2 = tf.tensor1d([29,889,35,99]);

//using the model
const result = simpleAdd(data1,data2)
result.print();
