$drugs = nil
def search
  puts "Enter a drug"
  drug_name = gets.chomp
  $drugs = JSON.parse(RestClient.get("https://rxnav.nlm.nih.gov/REST/drugs.json?name=#{drug_name}")).to_h
end

def get_drug_names
  JSON.parse(RestClient.get('https://rxnav.nlm.nih.gov/REST/displaynames.json'))["displayNames"]
end
