/*Bai 0: Test*/
function sum(a, b) {
    return a + b;
}

/*Bai 1*/
function joinBrandNames(brands) {
    let strBrands = "";
    for (let i = 0; i < brands.length; i++) {
        if (i === brands.length - 1) {
            strBrands = strBrands.concat(`${brands[i].name}`);
            break;
        }
        strBrands = strBrands.concat(`${brands[i].name}, `);
    }
    return strBrands;
}

/*Bài 2*/
function checkStringPalindrome(input) {
    const reverseInput = input.split("").reverse().join('');
    return reverseInput === input ? true : false;
}


/* Bài 3 */
function checkArrayHasAnEvenNumber(numArr) {
    let status = false;
    numArr.forEach(num => {
        if (num % 2 === 0) {
            status = true;
        }
    })
    return status;
}


/*Bài 4 */
function findIntersectNumbers(arr1, arr2) {
    const result = [];

    arr1.forEach(num => {
        let temp = null;
        arr2.forEach(num2 => {
            if (temp === num) {
                return;
            }
            if (num === num2) {
                temp = num;
                result.push(num);
            }
        })
    });

    return result;
}

/*Bài 5 */
function listSingleNumbers(input) {
    const strNum = input.toString();
    const arrSingleNum = strNum.split("");
    const newArr = [];
    arrSingleNum.forEach(num => newArr.push(parseInt(num)));
    return newArr;
}


/*Bài 6 */
function firstThursdayOfMonth(month, year) {
    const day = new Date();
    const thursdayIndex = 3;
    day.setFullYear(year, month - 1, 1);
    const firstDayOfMonthIndex = day.getDay();
    const diffDate = (thursdayIndex - firstDayOfMonthIndex) + 1;
    day.setFullYear(year, month - 1, 1 + diffDate);
    return day;
}


/*Bài 7*/


function queryCars(cars, brandID, name, minPrice, maxPrice, pageIndex) {
    const pageSize = (pageIndex + 1) * 5;
    //filter by brandId
    let newCars = cars
        .filter(car => brandID !== null ? car.brandId === brandID : car.brandId !== 0)
    //filter by name
    if (name)
        newCars = cars
            .filter(car => brandID !== null ? car.brandId === brandID : car.brandId !== 0)
            .filter(car => name !== null ? car.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 : car.name !== "");
    //filter by minPrice
    if (minPrice && minPrice !== null) {
        newCars = cars
            .filter(car => brandID !== null ? car.brandId === brandID : car.brandId !== 0)
            .filter(car => name !== null ? car.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 : car.name !== "")
            .filter(car => car.price >= minPrice);
    }
    //filter by maxPrice
    if (maxPrice && maxPrice !== null) {
        newCars = cars
            .filter(car => brandID !== null ? car.brandId === brandID : car.brandId !== 0)
            .filter(car => name !== null ? car.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 : car.name !== "")
            .filter(car => car.price <= maxPrice);
    }
    //filter mixed
    if (maxPrice && maxPrice !== null && minPrice && minPrice !== null) {
        newCars = cars
            .filter(car => brandID !== null ? car.brandId === brandID : car.brandId !== 0)
            .filter(car => name !== null ? car.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 : car.name !== "")
            .filter(car => car.price >= minPrice)
            .filter(car => car.price <= maxPrice);
    }

    if (pageIndex === null) {
        return newCars;
    }

    if (!isNaN(pageSize)) {
        const paginated = newCars.slice(pageIndex * 5, pageSize);
        console.log(paginated);
        return paginated;
    }
    return newCars;
}
/*Bài 8*/
function groupCarsByBrandIds(cars) {
    const tmpArr = [];
    cars.forEach(car => tmpArr.push(car.brandId));
    const tmpArr2 = [...new Set(tmpArr)];
    const newArr = [];
    tmpArr2.forEach(car => newArr.push({ brandId: car, cars: [] }));

    newArr.forEach(element => element.cars = cars.filter(car => car.brandId === element.brandId));
    return newArr;
}

// /*Một vài lưu ý chung:
//  - Có thể viết thêm các function bên trong file js này tùy ý nhưng không được sửa tên function và danh sách input của các function có sẵn.
// */
