  // JavaScript to update model options based on the selected car make
  document.getElementById('carMake').addEventListener('change', function () {
    var selectedMake = this.value;
    var modelSelect = document.getElementById('carModel');

    // Reset the model options
    modelSelect.innerHTML = '<option value="">Model</option>'; // Reset to default

    // Add new model options based on the selected car make
    if (selectedMake === 'Alfa Romeo') {
        addModelOption('giulia');
        addModelOption('stelvio');
    } else if (selectedMake === 'Aston Martin') {
        addModelOption('db11');
        addModelOption('vantage');

    }
    {
        else if (selectedMake === 'Audi') 
        
        addModelOption('a4');
        addModelOption('q5');
        addModelOption('a3');
        addModelOption('a6');
        addModelOption('q3');
        addModelOption('q7');
        addModelOption('s5');
        addModelOption('tt');
        addModelOption('e-tron');

    }
    // Add more conditions for other car makes as needed

    // Function to add model option with the specified value
    function addModelOption(model) {
        var option = document.createElement('option');
        option.value = model;
        option.text = model.charAt(0).toUpperCase() + model.slice(1); // Capitalize the first letter
        option.dataset.make = selectedMake; // Store the make information in the dataset
        modelSelect.add(option);
    }
});