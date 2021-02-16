export function ParseData(data, num_pairs) {
  console.log('react num pairs:' + num_pairs);
  console.log('react data:');
  console.log(data);

  // series[0].fields[x].values.buffer gives data now.
  // x = 0: source, 1: dest, 2: value
  var extractedData = data.series[0].fields;
  var transformedData = [];

  for (var i in extractedData[0].values.buffer) {
    var row = [extractedData[0].values.buffer[i], extractedData[1].values.buffer[i], extractedData[2].values.buffer[i]];
    transformedData.push(row);
  }
  console.log('transformed data');
  console.log(transformedData);

  let sorted_org_pairs = transformedData.sort((a, b) => b[2] - a[2]);

  // top 10 is actually top N, set by editor.  Default is 10.
  let top_10_pairs = sorted_org_pairs.slice(0, Math.min(num_pairs, sorted_org_pairs.length));

  // MAKE KEYS
  let source_orgs = [];
  let source_encoding = [];
  let counter = 0;
  for (var i in top_10_pairs) {
    let new_org = top_10_pairs[i][0];
    let added = false;
    top_10_pairs[i].coords = [{ x: 0, value: top_10_pairs[i][2] }, { x: 1 }];
    for (var j in source_orgs) {
      if (source_orgs[j] == new_org) {
        added = true;
        source_encoding.push(parseInt(j));
        top_10_pairs[i].coords[0].y = parseInt(j);
        break;
      }
    }
    if (!added) {
      source_orgs.push(new_org);
      source_encoding.push(counter);
      top_10_pairs[i].coords[0].y = counter;
      counter++;
    }
  }

  // dest keys

  let dest_orgs = [];
  let dest_encoding = [];
  counter = 0;
  for (var i in top_10_pairs) {
    let new_org = top_10_pairs[i][1];
    let added = false;
    for (var j in dest_orgs) {
      if (dest_orgs[j] == new_org) {
        added = true;
        dest_encoding.push(parseInt(j));
        top_10_pairs[i].coords[1].y = parseInt(j);
        break;
      }
    }
    if (!added) {
      dest_orgs.push(new_org);
      dest_encoding.push(counter);
      top_10_pairs[i].coords[1].y = counter;
      counter++;
    }
  }

  // tick marks at source_orgs & dest_orgs,
  // line y values at source_encoding & dest_encoding
  // line thickness relative to top_values

  // set colors by value as well.
  let alpha = 0.6;
  let color_palette = [
    'rgba(196, 199, 254, ' + alpha + ')',
    'rgba(171, 176, 253, ' + alpha + ')',
    'rgba(146, 152, 248, ' + alpha + ')',
    'rgba(122, 130, 246, ' + alpha + ')',
    'rgba(106, 115, 245, ' + alpha + ')',
    'rgba(85, 95, 244, ' + alpha + ')',
    'rgba(56, 67, 241, ' + alpha + ')',
    'rgba(23, 36, 238, ' + alpha + ')',
    'rgba(2, 14, 202, ' + alpha + ')',
    'rgba(3, 12, 158, ' + alpha + ')',
  ];

  let max_value = top_10_pairs[0][2];

  console.log('max val: ' + max_value);

  for (var i in top_10_pairs) {
    let color_scale = Math.ceil((top_10_pairs[i][2] / max_value) * 10);
    if (color_scale > 0) {
      color_scale--;
    }
    top_10_pairs[i].coords[0].color = color_palette[color_scale];

    // add source/dest to coords
    top_10_pairs[i].coords[0].source = top_10_pairs[i][0];
    top_10_pairs[i].coords[0].dest = top_10_pairs[i][1];

    // add readable value
    let value = top_10_pairs[i].coords[0].value / 1000;
    var volume = value;
    if (value < 1000) {
      volume = Math.round(value * 10) / 10 + ' KB';
    } else {
      value = value / 1000;
      if (value < 1000) {
        volume = Math.round(value * 10) / 10 + ' MB';
      } else {
        value = value / 1000;
        if (value < 1000) {
          volume = Math.round(value * 10) / 10 + ' GB';
        } else {
          value = value / 1000;
          if (value < 1000) {
            volume = Math.round(value * 10) / 10 + ' TB';
          } else {
            volume = Math.round(value * 10) / 10 + ' PB';
          }
        }
      }
    }
    top_10_pairs[i].coords[0].displayValue = volume;
  }

  console.log(top_10_pairs);

  let objToReturn = {
    srcOrgs: source_orgs,
    destOrgs: dest_orgs,
    topPairs: top_10_pairs,
  };

  return objToReturn;
}
