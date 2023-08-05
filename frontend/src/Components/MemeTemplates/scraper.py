import requests
from bs4 import BeautifulSoup
import csv

# Send a GET request to the website
for page in range(1, 54):
    url = f'https://imgflip.com/memetemplates?page={page}'
    response = requests.get(url)

    # Create a BeautifulSoup object to parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all image tags on the page
    image_tags = soup.find_all('img', class_="shadow")
    data = []

    # Specify the file path for the CSV file
    csv_file_path = 'output.csv'

    # Download each image
    for img in image_tags:
        # Get the image source URL
        image_url = img['src']
        print(image_url, page)
        data.append("https:" + image_url)

    with open(csv_file_path, 'a', newline='') as csv_file:
        # Create a CSV writer object
        csv_writer = csv.writer(csv_file)

        # Write each element of the array as a separate row
        for item in data:
            csv_writer.writerow([item])

print(f"CSV file '{csv_file_path}' created successfully.")
