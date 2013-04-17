require 'spec_helper'

describe Weighing do
  it { should respond_to(:weight)      }
  it { should respond_to(:body_fat)    }
  it { should respond_to(:body_water)  }
  it { should respond_to(:bone_mass)   }
  it { should respond_to(:muscle_mass) }
  it { should respond_to(:date)        }
end
