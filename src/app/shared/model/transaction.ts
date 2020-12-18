interface Dates {
    valueDate: number;
}

interface AmountCurrency {
    amount: string;
    currencyCode: string;
}

interface TransactionData {
    amountCurrency: AmountCurrency;
    type: string;
    creditDebitIndicator: string;
}

interface Merchant {
    name: string;
    accountNumber: string;
    img: string;
}

export interface Transaction {
    categoryCode: string;
    dates: Dates;
    transaction: TransactionData;
    merchant: Merchant;
}

export interface UserTransactionData {
    date: number;
    amount: string;
    merchantName: string;
}

export class UserTransaction implements Transaction {
    public categoryCode: string;
    public dates: Dates;
    public transaction: TransactionData;
    public merchant: Merchant;

    constructor(data: UserTransactionData) {
        this.categoryCode = '#124494';
        this.dates = {valueDate: data.date};
        this.transaction = {
            amountCurrency: {
                amount: data.amount,
                currencyCode: 'EUR'
            },
            type: "Online Transfer",
            creditDebitIndicator: "DBIT"
        },
        this.merchant = {
            name: data.merchantName,
            accountNumber: 'SI64397745065188826',
            img: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAAAAAA7VNdtAAAABGdBTUEAAYagMeiWXwAAAAJiS0dEAP+Hj8y/AAAEo0lEQVRIx43V22/bVBwH8PNfAe3a5uL41oQ0sR3aNc2SXtKkTRzn1rS5NOnEZQONTQjtiYc+TBoIxgOIoiEE0pjK+gZdY6dJ005DFAmp4gGoYAo9nGM7ju0GiaOoUk/68ff3Oz7nFFwfjK2t6416o9Go1+ubtVqtWq2Uyxsb66XS2lqxWCjk87msJGUy4L9FZbgQgV1gMFTkdJEG/1f0M9IGuSQwGCpSYJhAEVXU/EZpmFgFw8RmvZyXpFypXC4VLwmNWER1syHNTJIEQXqFpcJ6wS5WwKWMenHO7XQTHg/hdjnZ2JpdJMGlqmYJp4f06MPtCBVzVpEANrEpTCBA6ILwkI5wUbKIBBi8c9xHI+EgUQQ5MAQRy2fMAhGTQK0HXNSEg3BS/SBkvLGsaBJxYBHVEu0Zn/3iS/8ISamCpEjCG4hIJrEETKJWrRWoiZkfT473chOjDpTjHh9xe2huak4ciCVgFpVqkR779ORAbh/v1GYol5NevjnloDluKpwyxCKw7MRqyT2jKEpLlrsn8uOHD58cnn40Rgc5LjC72hdLwJRRKVc2nOWTJjKK3GwddbsdWdkPkhwX5AIzycSyKlCKebeX11+586yptNBAYbKMfrTnXkIEmenEsirmgUUUbt/+4ERuDYaiHEp3o1NqznQ8jkUMmE9tOXvveO9QMZNW87ufSpO8al5TBUoxncGN7HanZRbYtNpFTLAJLSARA+ZTu557ty23rCmKsh/1c5xmBCSuAes5L35/ZDGosGcfqyF6TvRaBFhEKfvOU2tlSns35kd/rJugEEEplrtkLX2royjmBXsa9fK60A2w3j7ooO+1B0aRu5+ZhGaA7b4qrt7vml6MfNxgzQQbYL/hMpsHg26Uzq4FqAbY78Rc6puOMqjrLdZuELHdidnVrzryoPukj+fsxH6LZhOfHxmk1Ur6uMvEKjLZlDmlnfehwqylgfV1iyhEa78e6DsTv/pHpGATiBj/P9AFJ2UXxisX6HjhzYXQ/tmB04tS1GEQI0NNiVHjEjzvNtWN1pR/gY/HmUmVcIYBuijk0omF8LSfJq6ew95Z+0BpNp+f9+CHoywr8NrmD/aJJlan8TTvp2iyC/+5gH+0Ty8uLnrw9SsswwuCwAtcPwdoIhPi0LwQ8lHslR34Aj55/+Z7O39C+CLqYmhMsDEI7rwQ4ULqtBeRGxCeivOJePgehB2SpmlOMHJUgkU+pT2IFyYpxhX5C74dzorSSkSGn4yyOkEfPQagtcrmY9osL7DoqS4Zfr2dFhN3fvgNlsdYkgwK+hO1FQDq2k5zeoqPYdjRbdiDN1YWH0F4FvAwXj+vkX4MQCKXVAUmnJ9hHCnY672xsvgAwm/HWNrHGYTXCN6JMYOwJEVTVBeeV1LxuxC+eYWlKHJKJ3plAG+Tq/2nCD4k2NH78CyfTm7B30MEbawY/l6tDCCRMqaEAEXTzEQanqbFlPT3LqqLpiZxvKkZIGWk5f4MrgwZynP6PC6K8Z9vjaBfqX5dWjPoIGdESW9FjfHjyl5+0J3PiMs7ERfyjNG93gwimbCJ8AxFM2NruwuZtJilcOSrphABk38B7kyf513J1o4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTdUMTA6Mzk6NDgrMDA6MDAoTYRTAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTEyLTE3VDEwOjM5OjQ5KzAwOjAw/2c3WwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=')"
        }

    }
};