class MedicationSerializer < ActiveModel::Serializer
  attributes :id, :name, :name_alt, :rxcui
  has_many :medication_one_interactions, class_name: "Interaction", foreign_key: "medication_one_id"
  has_many :medication_two_interactions, class_name: "Interaction", foreign_key: "medication_two_id"
  has_many :medication_ones, through: :medication_one_interactions, source: :medication_one
  has_many :medication_twos, through: :medication_two_interactions, source: :medication_two

end
