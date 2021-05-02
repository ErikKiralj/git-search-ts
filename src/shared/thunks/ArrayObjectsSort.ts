export function arrayObjectsSort(object: any, key: string, mode: string): any {
  return object.sort((a: any, b: any) => {
    let fa = a[key].toLowerCase(),
      fb = b[key].toLowerCase()

    switch (mode) {
      case "desc":
        if (fa > fb) {
          return -1
        }
        if (fa < fb) {
          return 1
        }
        return 0
        break
      case "asc":
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        break
    }
  })
}
