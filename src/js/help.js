const helpTemplate = `
  <div class="help">
    <div class="help__options">
      <div class="help__option>
        <label class="help__option__label" id="grid">Toggle Grid</label>
        <input type="checkbox" class="help__option__input" id="grid" name="grid" />
      </div>
    </div>
    <button class="help__toggle" aria-label="Toggle help"></button>
  </div>
`

document.body.innerHTML += helpTemplate


class Help {
  constructor(){
    this.container = document.querySelector('.help');
    this.showHelp = false;
    this.showGrid = false;

    this.helpToggleButton = this.container.querySelector('.help__toggle');
    this.helpOptionsContainer = this.container.querySelector('.help__options');

    this.gridCheckbox = this.container.querySelector('input[type="checkbox"]#grid')

    this.helpToggleButton.addEventListener('click', () => {
      this.container.classList.toggle('help--active');
    });
    this.gridCheckbox.addEventListener('change', () => this.toggleGrid())

    window.addEventListener('resize', 
      // Wait some time before running reize functions
      debounce(() => {
        if(this.showGrid){
          this.sizeGrid();
        }
      }, 500)
    )
  } 

  toggleGrid(){
    this.showGrid = !this.showGrid

    if(this.showGrid){
      this.createGrid()
    }else{
      this.gridElement.remove()
    }
  }

  createGrid(){
    this.gridElement = document.createElement('div');
    this.gridElement.classList.add('help-grid');
    
    this.sizeGrid();

    document.body.appendChild(this.gridElement);

  }

  sizeGrid(){
    const columnCount = Number(getCustomProperty('--grid-column-count')); 

    // Remove existing columns
    const oldColumns =  this.gridElement.querySelectorAll('.help-grid__column');
    oldColumns.forEach(column => column.remove());  


    // Create new grid columns
    for(let i = 0; i < columnCount; i++){
      const column = document.createElement('div');
      column.classList.add('help-grid__column');
      column.style.setProperty('--column-number', i + 1);
      this.gridElement.appendChild(column);
    }
  }
}

function getCustomProperty(prop){
  return getComputedStyle(document.documentElement).getPropertyValue(prop);
 }


function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,100,event);
  };
}


new Help()
