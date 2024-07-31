
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Componenet/LandingPage';
import HorseSelection from './Componenet/HorseSelection';
import BookingForm from './Componenet/BookingForm';
import ConfirmationPopup from './Componenet/ConfirmationPopup';
import { setStep, selectHorse, setBookingDetails, resetBooking } from './features/bookingSlice';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
const App = () => {
  const dispatch = useDispatch();
  const { step, selectedHorse, bookingDetails } = useSelector((state) => state.booking);

  const handleBookNow = () => {
    dispatch(setStep(1));
  };

  const handleSelectHorse = (horse) => {
    dispatch(selectHorse(horse));
    dispatch(setStep(2));
  };

  const handleSubmit = (details) => {
    dispatch(setBookingDetails(details));
    dispatch(setStep(3));
  };

  const handleClose = () => {
    dispatch(resetBooking());
  };

  return (
    <div>
      {step === 0 && <LandingPage onBookNow={handleBookNow} />}
      {step === 1 && <HorseSelection onSelectHorse={handleSelectHorse} />}
      {step === 2 && <BookingForm onSubmit={handleSubmit} selectedHorse={selectedHorse} />}
      {step === 3 && <ConfirmationPopup bookingDetails={bookingDetails} onClose={handleClose} />}
    </div>
  );
};

export default App;
