var line

let markers = []
let rectangles = []
let status = ''

var onGetPosition = (x, y) => {
  // @TODO: 实现逻辑
  if (status === 'drawMarker') {
    let isDuplicate = markers.some((marker) => marker.x === x && marker.y === y)
    if (isDuplicate) {
      console.log(`addMarkerFailed`)
    } else {
      let newMarker = { x, y }
      markers.push(newMarker)
      console.log(`addMarkerSuccess ${x},${y}`)
    }
  } else if (status === 'drawRectangle') {
    if (rectangles.length === 0) {
      let newRectangle = { x1: x, y1: y }
      rectangles.push(newRectangle)
      console.log(`Waiting for the second position...`)
    } else {
      let firstRectangle = rectangles[0]
      let newRectangle = {
        x1: firstRectangle.x1,
        y1: firstRectangle.y1,
        x2: x,
        y2: y,
      }
      rectangles.push(newRectangle)
      console.log(
        `addRectangleSuccess ${firstRectangle.x1},${firstRectangle.y1},${x},${y}`
      )
      rectangles = []
    }
  } else if (status === 'delete') {
    let shapeToDelete = null
    let shapeType = ''
    for (let i = 0; i < markers.length; i++) {
      if (markers[i].x === x && markers[i].y === y) {
        shapeToDelete = markers[i]
        shapeType = 'marker'
        markers.splice(i, 1)
        break
      }
    }
    if (!shapeToDelete) {
      for (let i = 0; i < rectangles.length; i++) {
        let rectangle = rectangles[i]
        if (
          x >= rectangle.x1 &&
          x <= rectangle.x2 &&
          y >= rectangle.y1 &&
          y <= rectangle.y2
        ) {
          shapeToDelete = rectangle
          shapeType = 'rectangle'
          rectangles.splice(i, 1)
          break
        }
      }
    }
    if (shapeToDelete) {
      console.log(
        `deleteShape ${shapeType} ${x},${y}` +
          (shapeType === 'rectangle'
            ? `,${shapeToDelete.x2},${shapeToDelete.y2}`
            : '')
      )
    } else {
      console.log(`deleteShapeFailed`)
    }
  }
}

var setStatus = (type) => {
  // @TODO: 实现逻辑
  status = type
}

while ((line = read_line()) != '') {
  let arr = line.split(' ')

  let eventType = arr[0]

  if (eventType === 'onPosition') {
    let x = parseInt(arr[1])

    let y = parseInt(arr[2])

    onGetPosition(x, y)
  } else if (eventType === 'switchStatus') {
    setStatus(arr[1])
  }
}
