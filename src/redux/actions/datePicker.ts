export const setOpenDataPicker = (isOpen: boolean) => {
  return {
    type: 'IS_OPEN',
    payload: isOpen,
  };
};

export const setSelectedDate = (selectedDate: string) => {
  return {
    type: 'SELECTED_DATE',
    payload: selectedDate,
  };
};
