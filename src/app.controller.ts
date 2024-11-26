import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Bookings } from './bookings';
import { BookingsWithID } from './bookings';
import { CreateBookingDto } from './CreateBookingDto';
import { UpdateBookingDto } from './UpdateBookingDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }



  bookings: BookingsWithID[] = [
    {
      id: 1,
      destination: "Egypt",
      description: "Boat adventure on the Nile and aligator feeding",
      imageURL: 'https://drive.hu/site/assets/files/21145/shutterstock_1853467000.jpg',
      price: 134_000,
      discount: 20,

    },
    {
      id: 2,
      destination: "Rome",
      description: "Colosseum Games: you can try yourself as a gladiator from ancient times",
      imageURL: 'https://i.natgeofe.com/k/a6c9f195-de20-445d-9d36-745ef56042c5/OG_Colosseum_Ancient-Rome_KIDS_1122_3x4.jpg',
      price: 110_000,
      discount: 5,

    },
    {
      id: 3,
      destination: "Budapest",
      description: "Learning about Hungary's historical culture, playing games from the old times and then a concert",
      imageURL: 'https://silver-line.hu/wp-content/uploads/2019/10/heroes-square.jpg',
      price: 85_650,
      discount: 10,

    },
    {
      id: 4,
      destination: "Los Angeles",
      description: "Beach Games with minibars, cheerleaders and surfing lessons",
      imageURL: 'https://www.travelandleisure.com/thmb/rBlfSP-WUFctvclGeP7ecovRQ0I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-los-angeles-pieer-LATG1123-63a9cc2b81a8427d931629c8e537b93c.jpg',
      price: 233_276,
      discount: 35,

    },
  ];
  nextID = 5;

  @Get('bookings')
  listBookings() {
    return this.bookings;
  }

  @Get('bookings/:id')
  showBookingsById(@Param('id') id: string) {
    const idNumber  = parseInt(id);
    const booked = this.bookings.find(booked => booked.id === idNumber)


    return booked;
    
  }

  @Post('bookings')
  @HttpCode(201)
  newBooking(@Body() newBookingData: CreateBookingDto) {
    const newBooking: BookingsWithID = {
      id: this.nextID++,
      destination: newBookingData.destination,
      description: newBookingData.description,
      imageURL: newBookingData.imageURL,
      price: newBookingData.price,
      discount: 0,
    };

    
    this.bookings.push(newBooking);
    return newBooking;
  }

  @Patch('bookings/:id')
  @HttpCode(200)
  bookModifier(@Param('id') id: string, @Body() bookingData: UpdateBookingDto) {
    const idNumber = parseInt(id);
    const originalBookID = this.bookings.findIndex(booking => booking.id == idNumber);
    if (originalBookID == -1) {
      throw new NotFoundException("No book with this ID in our library!");
    }
  }

  @Delete('bookings/:id')
  @HttpCode(204)
  deleteBookingsById(@Param('id') id: string) {
    const idNumber = parseInt(id);
    const idx = this.bookings.findIndex(booking => booking.id == idNumber);
    if(idx == -1) {
      throw new NotFoundException("No book with this ID in our library!")
    }
    this.bookings.splice(idx);
  }



  





}
