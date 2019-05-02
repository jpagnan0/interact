class Interaction < ApplicationRecord
  self.primary_keys = :medication_one_id, :medication_two_id
  belongs_to :medication_one, class_name: "Medication"
  belongs_to :medication_two, class_name: "Medication"
end
