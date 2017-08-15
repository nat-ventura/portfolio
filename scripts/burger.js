/**
  Base Component class
 */
class Component {
    
    constructor (selector) {
      this.baseClass = 'component'
      this.$self = document.querySelector(selector)
    }
    
    getElement (eleName) {
      return this.$self.querySelector(`.${this.baseClass}__${eleName}`)
    }
    
    addModifier (modifierName) {
      this.$self.classList.add(`${this.baseClass}--${modifierName}`)
    }
    
    removeModifier (modifierName) {
      this.$self.classList.remove(`${this.baseClass}--${modifierName}`)
    }
  }
  
/**
  FlexNav Component class
 */
class FlexNav extends Component {
    
      constructor (selector) {
    
        // Call parent constructor method
        super(selector)
    
        // Set some properties
        this.baseClass = 'nav'
        this.isOpen = false
        
        // Cache burger element selector
        this.$burger = this.getElement('burger')
        
        // Bind events
        this.$burger.addEventListener('click', (e) => { this.open(e) })
        this.$burger.addEventListener('touchend', (e) => { this.open(e) })
      }
      
      open (event) {
        event.preventDefault()
    
        this.isOpen = !this.isOpen
        
        if (this.isOpen) {
          this.addModifier('opened')
        } else {
          this.removeModifier('opened')
        }
      }
    }

// Create FlexNav instance on document ready
document.addEventListener('DOMContentLoaded', function () {
    new FlexNav('#nav')
  })