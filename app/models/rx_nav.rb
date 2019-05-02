class RxNav

  def self.drugs_url
    url = 'https://rxnav.nlm.nih.gov/REST/drugs.json'
    url
  end



  def self.parse_search_results(res)

    medication_result = JSON.parse(res)["drugGroup"]["conceptGroup"]

    medication_group = medication_result.select do |group|
      group["conceptProperties"]
    end.map do |group|
      group["conceptProperties"]
    end.flatten

    medication_info = medication_group.map do |info|
      {
        name_alt: info["synonym"],
        rxcui: info["rxcui"],
        name: info["name"]
      }
    end

    medication_info
  end
  # binding.pry
  def self.search_medication(term)
    res = RestClient.get drugs_url, params: { name: term }
    self.parse_search_results(res)
  end



end
