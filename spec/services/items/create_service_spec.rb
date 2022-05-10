require 'rails_helper'

RSpec.describe Items::CreateService do
  describe '.create!' do
    let(:name) { Faker::Name.name }

    subject { described_class.create!(name: name) }

    it 'creates an item' do
      expect(subject.name).to eq(name)
    end

    context 'name arg missing' do
      let(:name) { nil }

      it 'raises error' do
        expect { subject }.to raise_error(ArgumentError)
      end
    end
  end
end