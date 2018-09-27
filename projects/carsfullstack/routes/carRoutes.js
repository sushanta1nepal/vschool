const express =require('express')
const carRouter = express.Router()
//must refrence mongoose model to query for within the routes
const Cars = require('../models/car')


// const Cars = [

//             {
//                 model: 'Phantom',
//                 price: '$ 417,825',
//                 horsePower: '563 bhp',
//                 make: 'Rolls Royce',
//                 type: 'luxury',
//             },
//             {
//                 model: 'Wraith',
//                 price: '$ 320,500',
//                 horsePower: '624 bhp',
//                 make: 'Rolls Royce',
//                 type: 'luxury',
//             },
//             {
//                 model: 'Dawn',
//                 price: '$ 346,300',
//                 horsePower: '563 bhp',
//                 make: 'Rolls Royce',
//                 type: 'luxury',
//             },
//             {
//                 model: 'Mulsanne',
//                 price: '$ 304,670',
//                 horsePower: '530 bhp',
//                 make: 'Bentley',
//                 type: 'luxury',
//             },
//             {
//                 model: 'Flying Spur',
//                 price: '$ 189,000',
//                 horsePower: '626 bhp',
//                 make: 'Bentley',
//                 type: 'luxury',
//             },
//             {
//                 model: 'Bentayga',
//                 price: '$ 229,100',
//                 horsePower: '600 bhp',
//                 make: 'Bentley',
//                 type: 'luxury',
//             },
//             {
//                 model: 'AMG S 65',
//                 price: '$ 229,900',
//                 horsePower: '621 bhp',
//                 make: 'Mercedez-Benz',
//                 type: 'luxury',
//             },
//             {
//                 model: 'AMG GT C',
//                 price: '$ 157,000',
//                 horsePower: '550 bhp',
//                 make: 'Mercedez-Benz',
//                 type: 'luxury',
//             },
//             {
//                 model: 'AMG G 65',
//                 price: '$ 222,700',
//                 horsePower: '621 bhp',
//                 make: 'Mercedez-Benz',
//                 type: 'luxury',
//             },
//             {
//                 model: 'GranTurismo',
//                 price: '$ 198,500',
//                 horsePower: '454 bhp',
//                 make: 'Maserati',
//                 type: 'luxury',
//             },
//             {
//                 model: 'QuattroPorte GTS',
//                 price: '$ 165,980',
//                 horsePower: '523 bhp',
//                 make: 'Maserati',
//                 type: 'luxury',
//             },
//             {
//                 model: 'Levante Trofeo',
//                 price: '$ 199,980',
//                 horsePower: '590 bhp',
//                 make: 'Maserati',
//                 type: 'luxury',
//             },
//             {
//                 model: 'F12 berlinetta',
//                 price: '$ 319,995',
//                 horsePower: '731 bhp',
//                 make: 'Ferrari',
//                 type: 'Hyper',
//             },
//             {
//                 model: '488 GTB',
//                 price: '$ 252,800',
//                 horsePower: '660 bhp',
//                 make: 'Ferrari',
//                 type: 'Hyper',
//             },
//             {
//                 model: 'California',
//                 price: '$ 202,723',
//                 horsePower: '553 bhp',
//                 make: 'Ferrari',
//                 type: 'Hyper',
//             },
//             {
//                 model: '600LT',
//                 price: '$ 240,000',
//                 horsePower: '592 bhp',
//                 make: 'McLaren',
//                 type: 'Hyper',
//             },
//             {
//                 model: '720S',
//                 price: '$ 284,745',
//                 horsePower: '710 bhp',
//                 make: 'McLaren',
//                 type: 'Hyper',
//             },
//             {
//                 model: 'senna',
//                 price: '$1,000,000',
//                 horsePower: '789 bhp',
//                 make: 'McLaren',
//                 type: 'Hyper',
//             },
//             {
//                 model: 'DB11',
//                 price: '$ 198,995',
//                 horsePower: '600 bhp',
//                 make: 'Aston Martin',
//                 type: 'Hyper',
//             },
//             {
//                 model: 'Vanquish S',
//                 price: '$ 294,950',
//                 horsePower: '580 bhp',
//                 make: 'Aston Martin',
//                 type: 'Hyper',
//             },
//             {
//                 model: 'Vantage',
//                 price: '$ 186,195',
//                 horsePower: '430 bhp',
//                 make: 'Aston Martin',
//                 type: 'Hyper',
//             },
//             {
//                 model: 'Aventador',
//                 price: '$ 399,500',
//                 horsePower: '740 bhp',
//                 make: 'Lamborghini',
//                 type: 'Hyper',
//             },
//             {
//                 model: 'Huracan',
//                 price: '$ 199,800',
//                 horsePower: '630 bhp',
//                 make: 'Lamborghini',
//                 type: 'Hyper',
//             },
//             {
//                 model: 'Urus',
//                 price: '$ 200,000',
//                 horsePower: '641 bhp',
//                 make: 'Lamborghini',
//                 type: 'Hyper',
//             }
//         ]
// carRouter.use((req, res, next)=>{
//     console.log('This only runs when cars is called')
//     next()
// })
// carRouter.use('/:id',(req, res, next)=>{
//     console.log('trying to trick me with the use of an id for cars')
//     next()
// })


carRouter.route('/')
    .get((req,res)=>{
        Cars.find((err, cars)=>{
            if(err) return res.status(500).send({msg: 'There was an error communicating with ther Server.' })
            return res.status(200).send(cars)
        })       
    })
    .post((req, res)=>{
        const newCars = new Cars(req.body)
        newCars.save((err, newSavedCars)=>{
            if (err) return res.status(500).send({msg: 'There was an error communicating with ther Server.'})
            return res.status(200).send({newSavedCars, msg: 'Your new car has been saved successfully'})
        })
    })
carRouter.route('/:id')
    .get((req, res)=>{
        Cars.findById(req.params.id, (err, FoundCars)=>{
            if (err) return res.status(500).send({msg: 'There was an error communicating with ther Server.' })
            return res.status(200).send(FoundCars)
        })
    })
    .delete((req, res)=>{
      Cars.findOneAndDelete(
          {_id: req.params.id},
          (err, deleteCars)=>{
              if(err) return res.status(500).send({msg: 'There was an error communicating with ther Server.'})
              return res.status(200).send({deleteCars, msg: 'Your car has been successfully deleted'})
          }
      )
    })
    .put((req, res)=>{
        Cars.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true},
            (err, updateCars)=>{
                if (err) return res.status(500).send({msg: 'There was an error communicating with ther Server.'})
                return res.status(200).send({updateCars, msg: 'Your Car detail has successfully updated.'})
            }
        )
    })

module.exports = carRouter