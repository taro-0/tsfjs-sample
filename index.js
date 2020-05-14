import * as automl from '@tensorflow/tfjs-automl';

const MODEL_URL =
    'https://storage.googleapis.com/tfjs-testing/tfjs-automl/img_classification/model.json';

async function run() {
  const model = await automl.loadImageClassification(MODEL_URL);
  const image = document.getElementById('daisy');
  const predictions = await model.classify(image);

  // Show the resulting object on the page.
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(predictions, null, 2);
  document.body.append(pre);
}

run();